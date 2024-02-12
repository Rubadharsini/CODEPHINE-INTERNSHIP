// Sample Blog Data
let blogs = [];

// Function to create a new blog
function createBlog() {
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;

    if (title && content) {
        const newBlog = { id: Date.now(), title, content };
        blogs.push(newBlog);
        renderBlogList();
        clearForm();
    } else {
        alert('Both title and content are required!');
    }
}

// Function to edit a blog
function editBlog(id) {
    const blogToEdit = blogs.find(blog => blog.id === id);
    if (blogToEdit) {
        document.getElementById('blogTitle').value = blogToEdit.title;
        document.getElementById('blogContent').value = blogToEdit.content;

        // Remove the blog from the array
        blogs = blogs.filter(blog => blog.id !== id);

        // Re-render the blog list
        renderBlogList();
    }
}

// Function to delete a blog
function deleteBlog(id) {
    blogs = blogs.filter(blog => blog.id !== id);
    renderBlogList();
}

// Function to render the blog list
function renderBlogList() {
    const blogListContainer = document.getElementById('blogList');
    blogListContainer.innerHTML = '';

    if (blogs.length === 0) {
        blogListContainer.innerHTML = '<p>No blogs available</p>';
        return;
    }

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'card';
        blogCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${blog.title}</h5>
                <p class="card-text">${blog.content}</p>
                <button class="btn btn-primary" onclick="editBlog(${blog.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteBlog(${blog.id})">Delete</button>
            </div>
        `;
        blogListContainer.appendChild(blogCard);
    });
}

// Function to clear the create blog form
function clearForm() {
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogContent').value = '';
}

// Initial render
renderBlogList();

