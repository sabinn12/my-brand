        CKEDITOR.replace('editor');

        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');

        async function fetchBlogData() {
            try {
                if (!blogId) {
                    throw new Error('Blog ID is missing');
                }

                const response = await fetch(`https://mybrand-back-end.onrender.com/api/v1/blogs/${blogId}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }

                const blogData = await response.json();

                // Access the nested blogs object
                const blog = blogData.blogs;

                // Populate form fields with the relevant data
                document.getElementById('title').value = blog.title;
                document.getElementById('imagePreview').src = blog.image;
                CKEDITOR.instances.editor.setData(blog.content);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                alert('Failed to fetch blog data. Please try again later.');
            }
        }

        // Call the fetchBlogData function to fetch and populate the form with blog data
        fetchBlogData();

        // Add event listener for form submission
        document.getElementById('editBlogForm').addEventListener('submit', async function (event) {
            event.preventDefault();

            // Retrieve form data
            const updatedTitle = document.getElementById('title').value;
            const updatedContent = CKEDITOR.instances.editor.getData();
            const updatedImage = document.getElementById('image').files[0];

            // Construct form data
            const formData = new FormData();
            formData.append('title', updatedTitle);
            formData.append('content', updatedContent);
           const currentImage = document.getElementById('imagePreview').src;
           formData.append('image', currentImage);
          if (updatedImage) {
        formData.append('image', updatedImage);
    }

            // Retrieve the authorization token from localStorage
            const token = localStorage.getItem('token');

            // Send PUT request to update the blog
            try {
                const updateResponse = await fetch(`https://mybrand-back-end.onrender.com/api/v1/blogs/${blogId}`, { 
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                });

                if (!updateResponse.ok) {
                    throw new Error('Failed to update blog data');
                }

                
                window.location.href = 'addblog.html';
            } catch (error) {
                console.error('Error updating blog data:', error);
                
            }
        });

        // preview image selected for upload
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
   