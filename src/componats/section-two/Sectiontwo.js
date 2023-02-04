import React, { useState } from 'react';
import ME from  '../../assets/plus-icon.png'
import RIGHT from '../../assets/chevron-right-icon.png'
function Sectiontwo() {
  const [Answer,setAnswer] =useState(0)
  return (
    <section class = "bg-dark text-light story-section">
        <div class = "container">
            <div className = "faq">
                <h2 class = "heading-lg">Frequently Asked Question</h2>
                <ul class = "faq-list">
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">What is Netflix?</span>
                            <span class = "faq-icon">
                                <img  onClick={()=>{setAnswer(1)}} src = {ME} class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 1 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                            <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                    </li>
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">How much does Netflix cost?</span>
                            <span class = "faq-icon">
                                <img   onClick={()=>{setAnswer(2)}} src = {ME} class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 2 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">Where can I watch?</span>
                            <span class = "faq-icon">
                                <img   onClick={()=>{setAnswer(3)}} src ={ME} class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 3 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                            <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </li>
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">How do I cancel?</span>
                            <span class = "faq-icon">
                                <img  onClick={()=>{setAnswer(4)}} src ={ME}class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 4 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">What can I watch on Netflix?</span>
                            <span class = "faq-icon">
                                <img  onClick={()=>{setAnswer(5)}} src ={ME} class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 5 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>
                    <li class = "bg-light-grey">
                        <button class = "faq-head">
                            <span class = "faq-title">Is Netflix good for kids?</span>
                            <span class = "faq-icon">
                                <img  onClick={()=>{setAnswer(6)}} src = {ME} class = "plus-icon"/>
                            </span>
                        </button>
                        <div className={Answer == 6 ? 'fadfaq-body show-fadfaq-body':'faq-body'}>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </li>
                </ul>

                <p class = "email-text">Ready to watch? Enter your email to create or restart your membership.</p>
                <form class = "email-form">
                    <input type = "text" placeholder="Email address" class = "email-input"/>
                    <a href='https://www.netflix.com/in/'> <button  class = "btn btn-submit">
                        Get Started
    
                    </button></a>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Sectiontwo