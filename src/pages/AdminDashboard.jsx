import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('gallery')
  const [galleryImages, setGalleryImages] = useState([])
  const [newsItems, setNewsItems] = useState([])
  const [newImageFile, setNewImageFile] = useState(null)
  const [newImagePreview, setNewImagePreview] = useState(null)
  const [newImageTitle, setNewImageTitle] = useState('')
  const [newNewsLink, setNewNewsLink] = useState('')
  const [newNewsText, setNewNewsText] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (!isLoggedIn) {
      navigate('/admin')
      return
    }

    // Load existing data from localStorage
    const savedImages = localStorage.getItem('galleryImages')
    const savedNews = localStorage.getItem('newsItems')
    
    if (savedImages) {
      setGalleryImages(JSON.parse(savedImages))
    }
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews))
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    navigate('/admin')
  }

  const handleImageFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        setNewImageFile(file)
        // Create preview
        const reader = new FileReader()
        reader.onloadend = () => {
          setNewImagePreview(reader.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Please select an image file')
        e.target.value = ''
      }
    }
  }

  const handleAddImage = (e) => {
    e.preventDefault()
    if (newImageFile && newImageTitle) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newImage = {
          id: Date.now(),
          title: newImageTitle,
          image: reader.result, // Base64 encoded image
          category: 'All',
          date: new Date().toISOString()
        }
        const updatedImages = [newImage, ...galleryImages]
        setGalleryImages(updatedImages)
        localStorage.setItem('galleryImages', JSON.stringify(updatedImages))
        setNewImageFile(null)
        setNewImagePreview(null)
        setNewImageTitle('')
        // Reset file input
        const fileInput = document.getElementById('imageFileInput')
        if (fileInput) fileInput.value = ''
        alert('Image added successfully!')
      }
      reader.readAsDataURL(newImageFile)
    } else {
      alert('Please select an image file and enter a title')
    }
  }

  const handleAddNews = (e) => {
    e.preventDefault()
    if (newNewsLink && newNewsText) {
      const newNews = {
        id: Date.now(),
        text: newNewsText,
        link: newNewsLink,
        date: new Date().toISOString()
      }
      const updatedNews = [newNews, ...newsItems]
      setNewsItems(updatedNews)
      localStorage.setItem('newsItems', JSON.stringify(updatedNews))
      setNewNewsLink('')
      setNewNewsText('')
      alert('News added successfully!')
    }
  }

  const handleDeleteImage = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = galleryImages.filter(img => img.id !== id)
      setGalleryImages(updatedImages)
      localStorage.setItem('galleryImages', JSON.stringify(updatedImages))
    }
  }

  const handleDeleteNews = (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      const updatedNews = newsItems.filter(news => news.id !== id)
      setNewsItems(updatedNews)
      localStorage.setItem('newsItems', JSON.stringify(updatedNews))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#017cc2' }}>
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: '#dc2626' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-[#017cc2] text-[#017cc2]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Gallery Management
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'news'
                  ? 'border-[#017cc2] text-[#017cc2]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              News Management
            </button>
          </nav>
        </div>

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Add New Image</h2>
              <form onSubmit={handleAddImage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image File
                  </label>
                  <input
                    id="imageFileInput"
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImageFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017cc2]"
                  />
                  {newImagePreview && (
                    <div className="mt-2">
                      <img
                        src={newImagePreview}
                        alt="Preview"
                        className="max-w-xs h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image Title
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017cc2]"
                    placeholder="Enter image title"
                    value={newImageTitle}
                    onChange={(e) => setNewImageTitle(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-md"
                  style={{ backgroundColor: '#017cc2' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#015a94'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#017cc2'}
                >
                  Upload Image
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Gallery Images ({galleryImages.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                  <div key={image.id} className="border rounded-lg overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
                      }}
                    />
                    <div className="p-3">
                      <p className="font-medium text-sm mb-2">{image.title}</p>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                {galleryImages.length === 0 && (
                  <p className="text-gray-500 col-span-full text-center py-8">
                    No images added yet. Add your first image above.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Add New News</h2>
              <form onSubmit={handleAddNews} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    News Text
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017cc2]"
                    placeholder="Enter news text"
                    value={newNewsText}
                    onChange={(e) => setNewNewsText(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    News Link
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#017cc2]"
                    placeholder="https://example.com/news"
                    value={newNewsLink}
                    onChange={(e) => setNewNewsLink(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-md"
                  style={{ backgroundColor: '#017cc2' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#015a94'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#017cc2'}
                >
                  Add News
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">News Items ({newsItems.length})</h2>
              <div className="space-y-3">
                {newsItems.map((news) => (
                  <div key={news.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex-1">
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#017cc2] hover:underline"
                      >
                        {news.text}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(news.date).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteNews(news.id)}
                      className="ml-4 text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {newsItems.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    No news items added yet. Add your first news item above.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard

