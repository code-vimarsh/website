import React, { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import '../CSS/Foundercard.css';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

function CreateFounderCard(props) {

    return (
        <>
            <div className="cardContainer">
            <Tilt options={{speed: 200, "glare": true, "max-glare": 0.2, max: 22}} className="cardView">
                <div className="foundercard">
                    {/* <img className="quote" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuWCV_RfPDRAZ9pW9KgAbL2sIJ-QGd-F6hb7HBImELQ&s" alt="quotemark" loading="lazy"></img> */}
                    
                    <div className="founderData">
                        <img className="userimage" src={props.image} alt="Initiators" loading="lazy" ></img>
                        <p className="username">{props.name}</p>
                        <p>MSU CSE</p>
                        <p>{props.post}</p>
                        <p> <strong> Batch : 2025 </strong> </p>
                    </div>
                           
                </div>
                {/* <div className="back">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ullam cum, assumenda alias explicabo quasi obcaecati minus quo autem sequi perspiciatis recusandae inventore illum. Laudantium, dolor omnis commodi nemo odio culpa debitis! Omnis aut corrupti vitae nesciunt voluptatem.
                    </p>
                </div> */}
            </Tilt>
            </div>
            
            <script type="text/javascript" src="vanilla-tilt.js"></script>
        </>
    );

}

export default function Foundercard(){

    const founderinfo = [
        {
            id : 1,
            name : "Soham Zadafiya",
            post : "Founder",
            image : "https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-961.jpg?size=626&ext=jpg&ga=GA1.1.1360090374.1689347540&semt=ais"
        },
        {
            id : 2,
            name : "Jay Fanse",
            post : "Founder",
            image : "https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-961.jpg?size=626&ext=jpg&ga=GA1.1.1360090374.1689347540&semt=ais"
        },
        {
            id : 3,
            name : "Kaushal Danani",
            post : "Founder",
            image : "https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-961.jpg?size=626&ext=jpg&ga=GA1.1.1360090374.1689347540&semt=ais"
        },
        {
            id : 4,
            name : "Jay Prajapati",
            post : "Founder",
            // image : "https://img.freepik.com/premium-photo/blue-software-code-3d-icon-isolated-white-background-with-website-coding-technology-sign-programming-developer-ui-writing-application-symbol-design-java-program-script-html-data-development_79161-2438.jpg?size=626&ext=jpg&ga=GA1.1.1360090374.1689347540&semt=ais"
            image : "https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-961.jpg?size=626&ext=jpg&ga=GA1.1.1360090374.1689347540&semt=ais"
        }
    ];

    return(
        <>
            <div className="founderinfo" id="AboutUS">
            <h1 className="foundercardline">The Initiators Of Code-Vimarsh</h1>
            <div className="founderGrid">
                {founderinfo.map(function Founderinfocard(element) {
                    return (
                        <CreateFounderCard
                            key={element.id}
                            name={element.name}
                            post={element.post}
                            image={element.image}
                        ></CreateFounderCard>
                    );
                })}
            </div>
        </div>
      </>
    );
}