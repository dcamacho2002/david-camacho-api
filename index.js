fetch('https://api.github.com/users/dcamacho2002/repos')
    .then(function (response) {
        return response.json();
    })
    .then(function (repositories) {
        console.log(repositories);

        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            const link = document.createElement("a");
            link.href = repositories[i].html_url;
            link.innerText = repositories[i].name;
            link.target = "_blank";
            project.appendChild(link);
            projectList.appendChild(project);
        }
    })

    .catch(function (error) {
        console.error('An error occurred:', error);
        console.log('Project section empty.');
    }) 