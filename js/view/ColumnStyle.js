document.addEventListener("DOMContentLoaded", function() {
    IdColumn = document.querySelectorAll('.kanban__column');
    
    function getColuna() {
        IdColumn.forEach(element => {
            console.log(element.getAttribute('data-id'))
            switch (element.getAttribute('data-id')) {
                case ('1') :
                    // console.log(element)
                    document.querySelectorAll('.kanban__column[data-id="1"] .kanban__item-input').forEach(item => {
                        // console.log(item)
                        item.style.backgroundColor = "#2222b7"
                        item.style.color = "rgb(205 205 205)"
                    })
                    break;
                case ('2') :
                    // console.log(element)
                    document.querySelectorAll('.kanban__column[data-id="2"] .kanban__item-input').forEach(item => {
                        // console.log(item)
                        item.style.backgroundColor = "rgb(209 209 50 / 83%)"
                    })
                    break;
                case ('3') :
                    // console.log(element)
                    document.querySelectorAll('.kanban__column[data-id="3"] .kanban__item-input').forEach(item => {
                        // console.log(item)
                        item.style.backgroundColor = "#357135"
                    })
                    break;
            }
        });
    }
    getColuna()
})
