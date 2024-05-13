window.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.getElementById('loader');
    const loaderContainer = document.getElementById('loader-container');
    const slider = document.getElementById('slider');

    // Load liked blogs from local storage
    let likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || {};

    fetchBlogs();

    function fetchBlogs() {
        loaderContainer.style.display = 'flex';

        // Fetch blogs
        fetch('https://mybrand-back-end.onrender.com/api/v1/blogs')
            .then(response => response.json())
            .then(data => {
                if (data && data.blogs && Array.isArray(data.blogs)) {
                    displayBlogs(data.blogs);
                } else {
                    throw new Error('No blogs found');
                }
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                slider.innerHTML = '<p>Error fetching blogs. Please try again later.</p>';
                slider.style.color = 'red';
                slider.style.marginLeft = '38%'
            })
            .finally(() => {
                loaderContainer.style.display = 'none';
                slider.style.display = 'block';
            });
    }

    function displayBlogs(blogs) {
        const blogElements = blogs.map(blog => (
            React.createElement('div', { className: 'blog-box', 'data-blog-id': blog._id, key: blog._id }, [
                React.createElement('div', { className: 'blog-img' }, [
                    React.createElement('img', { src: blog.image, alt: 'blog' })
                ]),
                React.createElement('div', { className: 'blog-text' }, [
                    React.createElement('a', { className: 'blog-title', href: `singlepb.html?id=${blog._id}` }, blog.title),
                    React.createElement('div', { className: 'blog-actions' }, [
                        React.createElement('button', { onClick: () => handleLike(blog._id) }, [
                            React.createElement('i', { className: 'fas fa-thumbs-up' }),
                            likedBlogs[blog._id] || blog.likes || 0
                        ]),
                        React.createElement('a', { href: `singlepb.html?id=${blog._id}`, style: { marginLeft: '7%' } }, 'Read More')
                    ])
                ])
            ])
        ));

        ReactDOM.render(
            React.createElement('div', null, blogElements),
            document.getElementById('slider')
        );
    }

    async function handleLike(blogId) {
        // Check if the slider element exists
        if (!slider) {
            console.error('Slider element not found');
            return;
        }
    
        // Check if the blog has already been liked
        const isLiked = likedBlogs[blogId];
    
        // If already liked, increment the like count
        if (isLiked) {
            likedBlogs[blogId] += 1;
        } else {
            // If not liked, set the like count to 1
            likedBlogs[blogId] = 1;
        }
    
        // Update the like count in the UI
        const likeButton = document.querySelector(`.blog-box[data-blog-id="${blogId}"] .blog-actions button`);
        if (likeButton) {
            likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> ${likedBlogs[blogId]}`;
        } else {
            console.error('Like button not found');
        }
    
        // Save the updated likedBlogs to local storage
        updateLocalStorage();
    
        // Send a POST request to your backend API to create the like
        try {
            const response = await fetch(`https://mybrand-back-end.onrender.com/api/v1/blogs/${blogId}/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({like : true})
            });
            if (!response.ok) {
                throw new Error('Failed to create like');
            }
            console.log('Like created successfully');
        } catch (error) {
            console.error('Error creating like:', error);
        }
    }
    function updateLocalStorage() {
        localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
    }
    
    
});
