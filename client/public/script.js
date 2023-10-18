const button = document.querySelector('.btn-primary')
const id = document.querySelector('.id')

button.addEventListener('click',searchBook)

google.books.load()

function alertNotFound() {
    alert("Book not found")
}

function searchBook() {
    var viewer = new google.books.DefaultViewer(
        document.getElementById('viewerCanvas')
    )
    viewer.load('ID:' + id.value, alertNotFound)
}