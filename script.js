
const fileInput = document.getElementById("file-input");
const filesContainer = document.querySelector(".files-container");
const fileItemTemplate = document.getElementById("file-item-template");
const activity = document.querySelector(".activity");
const deleteButton = document.getElementById("delete-button");


// deleteButton.addEventListener("click", function () {
//     var fileItemWrapper = deleteButton.closest(".file-wrapper");
//     fileItemWrapper.style.display = "none";
// });



fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    for (const file of files) {
        const fileItem = fileItemTemplate.content.cloneNode(true);
        const filePreview = fileItem.querySelector(".file-preview");
        const filePreviewImg = filePreview.querySelector("img");
        const filePreviewName = filePreview.querySelector(".file-name");
        const filePreviewSize = filePreview.querySelector(".file-size");
        const downloadBtn = fileItem.querySelector(".btn-download");
        const deleteBtn = fileItem.querySelector(".btn-delete");


        filePreviewImg.src = URL.createObjectURL(file);

        // Set the file name and size
        filePreviewName.textContent = file.name;
        filePreviewSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;


        // Set the download link
        downloadBtn.setAttribute("href", URL.createObjectURL(file));
        downloadBtn.setAttribute("download", file.name);

        // Add event listeners to the delete button
        deleteBtn.addEventListener("click", function () {
            var fileItem = deleteBtn.closest(".file-wrapper")
            fileItem.style.display = "none";
            fileItem.remove();
        });

         

        // Append the file item to the files container
        filesContainer.appendChild(fileItem);

    }
    // function addFileToPage(file) {
    //     const fileItem = fileItemTemplate.content.cloneNode(true);
    //     const fileWrapper = fileItem.querySelector(".file-wrapper");
    //     const fileName = fileItem.querySelector(".file-name");
    //     const fileSize = fileItem.querySelector(".file-size");
    //     const filePreview = fileItem.querySelector(".file-preview img");
    //     const downloadButton = fileItem.querySelector(".btn-download");
    // }
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    if (file.type.startsWith("image/")) {
        filePreview.src = URL.createObjectURL(file);
        filePreview.alt = file.name;
    }
    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = file.name;
    filesContainer.appendChild(fileItem);

    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + " bytes";
        else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        else return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    }



});


const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
function uploadFile(isFolder) {
    var input = document.getElementById("file-upload");
    if (input.files.length > 0) {
        var file = input.files[0];
        var formData = new FormData();
        formData.append("file", file);
        formData.append("isFolder", isFolder);

        fetch("upload.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.log("No file selected");
    }
}

// function to show/hide the "Create folder" input field
function showCreateFolder() {
    var createFolderInput = document.getElementById("create-folder");
    createFolderInput.style.display = createFolderInput.style.display === "none" ? "block" : "none";
}

// function to show/hide the "Create shared folder" input field
function showCreateSharedFolder() {
    var folderUploadInput = document.getElementById("folder-upload");
    folderUploadInput.style.display = folderUploadInput.style.display === "none" ? "block" : "none";
}

// function to create an automated folder
function createAutomatedFolder() {
    // code to create a new folder with a default name, e.g. "Automated Folder"
}

// function to start screen recording
function startScreenRecording() {
    // code to start screen recording
}
