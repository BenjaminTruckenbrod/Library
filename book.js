function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

}
 Book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
 }

 Book.prototype.toggleRead = function() {
    
 }

function addBookToLibrary() {

    let form = document.createElement("form")
    form.id = ("idForm")
    form.addEventListener("submit", (pushBook) => {
        pushBook.preventDefault();

        let arr=['title', 'author', 'pages', 'read']

        var b = new Book (document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").value)
        lib.push(b)

        cleanUp()
        displayBooks(lib)

    })

    document.body.appendChild(form)

    let inputTitle = document.createElement("input")
    inputTitle.id = ("title")
    inputTitle.type = ("text")
    inputTitle.placeholder = ("Title")
    form.appendChild(inputTitle)

    let inputAuthor = document.createElement("input")
    inputAuthor.id = ("author")
    inputAuthor.type = ("text")
    inputAuthor.placeholder = ("Author")
    form.appendChild(inputAuthor)

    let inputPages = document.createElement("input")
    inputPages.id = ("pages")
    inputPages.type = ("text")
    inputPages.placeholder = ("Pages")
    form.appendChild(inputPages)

    let inputRead = document.createElement("input")
    inputRead.id = ("read")
    inputRead.type = ("text")
    inputRead.placeholder = ("Read")
    form.appendChild(inputRead)

    let submit = document.createElement("input")
    submit.id = ("submit")
    submit.type = ("submit")
    submit.value = ("Submit")
    form.appendChild(submit)
}

function cleanUp(){
    let form = document.getElementById("idForm")
    form.remove()
}

function displayBooks(l) {
    for (let i = 0; i < l.length; i++){
        console.log(l[i])
        console.log(l[i].title)
        var book = document.createElement('div');
        book.data = i
        book.innerHTML=(`${l[i].title}, ${l[i].author}, ${l[i].pages}, ${l[i].read}, `)
        document.body.appendChild(book)
        var removeButton = document.createElement('button')
        removeButton.innerHTML = ("Remove")
        removeButton.id = (`${i}book`)
        book.appendChild(removeButton)
        removeButton.addEventListener("click", removeBook)
    }
}

function removeBook(){
    let elem = document.getElementById(`${this.id}`).parentElement;
    elem.remove()
}


let lib = []

let newBook = document.getElementById('newBook')
newBook.addEventListener('click', addBookToLibrary)