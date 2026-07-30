/*
==========================================================
seereference.com Website V4
Shared JavaScript
Phase 1.2
==========================================================
*/


document.addEventListener("DOMContentLoaded", function(){


    /*
    -----------------------------
    Mobile navigation
    -----------------------------
    */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".site-navigation");


    if(menuButton && navigation){

        menuButton.addEventListener(
            "click",
            function(){

                navigation.classList.toggle(
                    "active"
                );

                menuButton.classList.toggle(
                    "open"
                );

            }
        );

    }



    /*
    -----------------------------
    Active page navigation
    -----------------------------
    */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();


    const links =
        document.querySelectorAll(
            ".site-navigation a"
        );


    links.forEach(function(link){

        const href =
            link.getAttribute("href");


        if(
            href === currentPage ||
            (
                currentPage === "" &&
                href === "index.html"
            )
        ){

            link.classList.add(
                "active"
            );

        }

    });



    /*
    -----------------------------
    Smooth scrolling
    -----------------------------
    */

    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function(anchor){

        anchor.addEventListener(
            "click",
            function(event){

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if(target){

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }
        );

    });



    /*
    -----------------------------
    Scroll reveal
    -----------------------------
    */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            function(entries){

                entries.forEach(function(entry){

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold:0.15
            }
        );


    revealElements.forEach(function(element){

        observer.observe(element);

    });



    /*
    -----------------------------
    Dynamic year
    -----------------------------
    */

    const year =
        document.querySelector(
            ".current-year"
        );


    if(year){

        year.textContent =
            new Date().getFullYear();

    }



});
