CKEDITOR.replace('editor');
// Function to handle form submission
document.getElementById('addBlogForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files[0]; // Get the selected image file
    const content = CKEDITOR.instances.editor.getData();

    // Prepare form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('content', content);

    try {
        // Get the authentication token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Authentication token not found');
        }

        // Send POST request to backend API with authentication token
        const response = await fetch('https://mybrand-back-end.onrender.com/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const blogId = data.id;
            window.location.href = `addblog.html?id=${blogId}`;
        } else {
            console.error('Failed to add blog');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to preview the selected image
function previewImage() {
    var fileInput = document.getElementById('image');
    var imagePreview = document.getElementById('imagePreview');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
    