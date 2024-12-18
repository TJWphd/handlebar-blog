const commentBox = document.getElementById('commentBox');
const subButt = document.getElementById('subButt');

const subComment = async (e) => {
  const response = await fetch(`/api/posts/comment/${e.target.value}`, {
    method: 'POST',
    body: JSON.stringify({ text: commentBox.value }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log(response);
    // If successful, append comment to post
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};
subButt.addEventListener('click', subComment);
