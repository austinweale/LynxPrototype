document.addEventListener('DOMContentLoaded', () => {
    "use strict"
    const tags = ['work', 'working-out', 'office-funny', 'onboarding', 'wow', 'cute', 'travel', 'tech', 'oceanography', 'wallets']
    const links = [
        {
            from: "Austin",
            url: "http://www.impactofficepro.com/blog-0/bid/183375/Top-10-Rules-of-Etiquette-for-An-Open-Office",
            description: "This was a good article for learning about stuff and things",
            tags: {work: true, 'office-funny': true, wow: true}
        },
        {
            from: "Kimiko",
            url: "https://www.buzzfeed.com/coralewis/google-let-engineers-protest-will-it-let-cleaners?utm_term=.wm53PxP5z#.enkoMJMlX",
            description: "Look at this!",
            tags: {wow: true, tech: true, work: true}
        },
        {
            from: "Wei-jen",
            url: "http://www.clickhole.com/article/what-do-after-job-interview-when-youre-standing-cl-1298?utm_campaign=default&utm_medium=ShareTools&utm_source=facebook",
            description: "Important advice that is always useful",
            tags: {onboarding: true, 'office-funny': true, cute: true}
        }
    ]


    let searchInput = document.getElementById("search-input")
    let searchSubmitBtn = document.getElementById("search-submit")
    let filterArea = document.getElementById('filters')
    let tagInput = document.getElementById("search-tags")
    let filterResultsArea = document.getElementById('filter-results');
    let tagsSubmitBtn = document.getElementById("tags-submit")

    searchInput.addEventListener('focus', e => {
        filterArea.classList.remove('hidden')
    })

    // tagInput.addEventListener('input', e => {
    //     let currentVal = tagInput.value 
    //     let filtered = tags.filter(tag => {
    //         return tag.includes(currentVal)
    //     })
    //     console.log(filtered)
    // })

    tagsSubmitBtn.addEventListener('click', e => {
        // set search value
        let tag = tagInput.value;
        if (tag.length > 0) {
            filterResultsArea.innerHTML = ""

            // filter the links
            let relevantLinks = links.filter(link => {
                return link.tags[tag]
            });

            searchInput.value = "tag: " + tag

            // close filter options
            filterArea.classList.add('hidden')            

            // show all ze shit
            let h3 = document.createElement('h3')
            h3.innerHTML = "Showing links tagged with \"" + tag + "\""            
            filterResultsArea.appendChild(h3);

            relevantLinks.forEach(link => {
                let div = document.createElement('div');
                div.classList.add('link')
                div.innerHTML += "<h4>From: " + link.from + "</h4>"
                div.innerHTML += "<h4>Link: <a href=" + link.url + ">" + link.url + "</a></h4>"
                div.innerHTML += "<p>" + link.description + "</p>"
                div.innerHTML += "<h4>Tags</h4>"

                let tagDiv = document.createElement('div');
                Object.keys(link.tags).forEach(key => {
                    if (key === tag) {
                        tagDiv.innerHTML += "<span class=\"link-tag bold\">" + key + "</span>"
                    } else {
                        tagDiv.innerHTML += "<span class=\"link-tag\">" + key + "</span>"
                    }                    
                })
                div.appendChild(tagDiv)
                filterResultsArea.appendChild(div)

                

                let span = document.createElement('span');  
                span.classList.add('btn-house')              
                span.innerHTML = "<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i>"   
                div.appendChild(span)                            
                /*<div class="input-group input-group-sm">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                    </span>
                </div><!-- /input-group -->*/
                let div2 = document.createElement('div')
                div2.classList.add("input-group")
                div2.classList.add("input-group-sm") 
                div2.classList.add("hidden")  
                div.appendChild(div2)             

                let input = document.createElement('input')
                input.classList.add("form-control")
                input.type = "text"
                input.placeholder = "New tag"
                div2.appendChild(input);

                let span2 = document.createElement('span')
                span2.classList.add("input-group-btn")
                div2.appendChild(span2)

                let button = document.createElement('button')
                button.classList.add('btn')
                button.classList.add('btn-default')
                button.type = "button"
                button.innerHTML = "Add tag"
                span2.appendChild(button)

                button.addEventListener('click', () => {
                    let val = input.value
                    if (val.length > 0) {
                        div.innerHTML += "<span class=\"link-tag\">" + val + "</span>"
                    }
                    div2.classList.add('hidden')
                    span.classList.remove('hidden');
                })
                span.addEventListener('click', () => {
                    span.classList.add('hidden')
                    div2.classList.remove('hidden')

                }) 
            })
        }        
    })
});