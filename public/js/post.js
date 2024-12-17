const commentBox = document.getElementById('commentBox');
const subButt = document.getElementById('subButt');

const subComment = async (e) => {
  const response = await fetch(`/api/posts/comment/${e.target.value}`, {
    method: 'POST',
    body: JSON.stringify({ comment: commentBox.value }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful, append comment to post
    // document.location.replace('/profile');
    console.log(response);
  } else {
    alert(response.statusText);
  }
};
subButt.addEventListener('click', subComment);
