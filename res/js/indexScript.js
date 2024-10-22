
window.onload = async function() {
    fetch('../res/json/posts.json')
            .then((response) => response.json())
            .then(json => {
                setPost(json);
            })
            .catch(err => {
                let errDiv = document.createElement("div");
                errDiv.className = 'post';
                errDiv.innerText = err;
                document.body.appendChild(errDiv);
            })

    const setPost = (json) => {
        for (let i = 0; i < json.length; i++) {
            const postParent = document.getElementsByClassName("posts")[0];
            const post = document.createElement("div")
            post.className = "post "+i;

            const postHeader = constructPostHeader(json, i);
            post.appendChild(postHeader);

            const postBody = constructPostBody(json, i);
            post.appendChild(postBody);

            const postFooter = constructPostFooter(json, i);            
            post.appendChild(postFooter);
        
            postParent.appendChild(post);
        }
    }

    const constructPostHeader = (json, i) => {
        const postHeader = document.createElement("div");
            postHeader.className = "post header";

            const postHeaderPerson = document.createElement("div");
            postHeaderPerson.className = "header person";

            const postHeaderImg = document.createElement("img");
            postHeaderImg.src = "res/svg/person.svg";
            postHeaderImg.alt = json[i].author.email;

            const postHeaderName = document.createElement("p");
            postHeaderName.innerText = json[i].author.name;

            postHeaderPerson.appendChild(postHeaderImg);
            postHeaderPerson.appendChild(postHeaderName);

            const postHeaderTime = document.createElement("p");
            date = new Date(json[i].creationTimestamp);
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            const formattedDate = date.toLocaleString('en-US', options);
            postHeaderTime.innerText = formattedDate;

            postHeader.appendChild(postHeaderPerson);
            postHeader.appendChild(postHeaderTime);

            return postHeader;
    }

    const constructPostBody = (json,i) => {
        const postBody = document.createElement("div");
        postBody.className = "post body";

        if (Object.hasOwn(json[i], "picture")){
            const postBodyImage = document.createElement("img");
            postBodyImage.src = json[i].picture;
            postBodyImage.alt = "A post picture.";
            postBody.appendChild(postBodyImage);
        }

        if(Object.hasOwn(json[i], "text")){
            const postBodyText = document.createElement("p");
            postBodyText.innerText = json[i].text;
            postBody.appendChild(postBodyText);
        }

        return postBody;
    }

    const constructPostFooter = (json,i) => {
        const postFooter = document.createElement("div");
        postFooter.className = "thumbs up";

        const postFooterImg = document.createElement("img");
        postFooterImg.src = "res/svg/thumbUp.svg";
        postFooterImg.alt = "Thumbs up";
        postFooter.appendChild(postFooterImg);

        if (Object.hasOwn(json[i], "likes")){
            const postFooterLikes = document.createElement("p");
            postFooterLikes.innerText = json[i].likes;
            postFooter.appendChild(postFooterLikes);
        }

        return postFooter;
    }
}


