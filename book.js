class Book{

    constructor(title, author, pages, read){
        this.title=title;
        this.pages=pages;
        this.author=author;
        this.read=read;
        this.displayed='false'
        this.uid=''
    }

    info() {
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    }
}

function addBookToLibrary(evt) {

    let form = document.createElement("form")
    form.id = ("idForm")
    let x = evt.currentTarget.masterIndex

    //gets all elemnts of the form and pushes them to an array
    form.addEventListener("submit", (pushBook) => {
        pushBook.preventDefault();

        let read = ''

        if (document.getElementById("read").checked){
            read = 'has read'
        }
        else{
            read = 'not read'
        }

        var b = new Book (document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, read)
        // b.uid=mIndex
        b.uid=x
        newBook.masterIndex+=1
        
        lib.push(b)

        cleanUp()
        displayBooks(lib)

    })

    if (document.getElementById('idForm')==null){ 


        let bodyDiv = document.getElementById("bodyDiv");
        bodyDiv.appendChild(form);

        let inputTitle = document.createElement("input")
        inputTitle.className=("formClass")
        inputTitle.id = ("title")
        inputTitle.type = ("text")
        inputTitle.placeholder = ("Title")
        form.appendChild(inputTitle)

        let inputAuthor = document.createElement("input")
        inputAuthor.className=("formClass")
        inputAuthor.id = ("author")
        inputAuthor.type = ("text")
        inputAuthor.placeholder = ("Author")
        form.appendChild(inputAuthor)

        let inputPages = document.createElement("input")
        inputPages.className=("formClass")
        inputPages.id = ("pages")
        inputPages.label= ("Have you read this Book?")
        inputPages.type = ("text")
        inputPages.placeholder = ("Pages")
        form.appendChild(inputPages)

        let inputRead = document.createElement("input")
        // inputRead.className=("formClass")
        inputRead.id = ("read");
        inputRead.name = ("read");
        inputRead.type = ("checkbox")

        let label = document.createElement("Label");
        // label.className=("formClass")
        label.htmlFor = ("read");
        label.innerHTML=("Check if you have read this book");
        form.appendChild(inputRead)
        form.appendChild(label)


        let submit = document.createElement("input")
        submit.className=("formClass")
        submit.id = ("submit")
        submit.type = ("submit")
        submit.value = ("Submit")
        form.appendChild(submit)
    }
}

function cleanUp(){
    let form = document.getElementById("idForm")
    form.remove()
}

function displayBooks(l) {

    for (let i = 0; i < l.length; i++){
        if(l[i].displayed=='false'){
            var book = document.createElement('div');
            let j = l[i].uid
            book.uid=j
            // book.dataset.index= `${l[i].uid}`
            book.data = i
            if(book.read == 'on'){
                book.read = 'yes'
            }
            else{
                book.read = 'no'
            }
            book.innerHTML=(`${l[i].title}, ${l[i].author}, ${l[i].pages}, ${l[i].read}`)

            // let libRec = document.createElement('div')
            // libRec.id = ("library-record")

            let libRecCont = document.getElementById('library-record-container')

            libRecCont.appendChild(book)
            l[i].displayed='true'

            var removeButton = document.createElement('button')
            removeButton.className=("remove-button")
            removeButton.innerHTML = ("Remove")
            removeButton.id = (`${i}book`)
            book.appendChild(removeButton)
            removeButton.addEventListener("click", removeBook)
        }

        else{
            continue
        }
    }
}

function removeBook(){
    let elem = document.getElementById(`${this.id}`).parentElement;
    elem.remove()
    let found = lib.find(element => element.uid == elem.uid);
    lib.splice(found,1)
    let i = 0

    console.log(lib)
}

let lib = []

let newBook = document.getElementById('newBook')
newBook.masterIndex = 0;
newBook.addEventListener('click', addBookToLibrary)

