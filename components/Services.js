import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from "next/image";


export default function Services({ service }) {
    const servicesB = [
        { title: "Development",
            description: "Created responsive apps from the ground up. "

        },
        { title: "Flexibility and Growth Mindset",
            description: "One moment I may be under the hood of a Python program figuring out how to change the way data is structured. The next moment I may have to nudge a pixel just so. Then on to figuring out the best layout for a page."

        },
        { title: "Seeing the big picture",
            description: "There are many variations of passages of Ipsum available, but the majority have suffered alteration in some form, variations of passages of Ipsum available but the majority have suffered"

        },
    ];
    const { myServices, bgImage, servicesJson } = service.fields;
    console.log("services", bgImage.fields.file.url);
    const bg = bgImage.fields.file.url;

    return (
        <div className="services-wrapper"
            // style={{
            //     backgroundImage: `url(${'https:' + bgImage.fields.file.url})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize:'contain',
            //     backgroundPosition:'center'
            // }}
        >

            <div className="services"
            >
                <div className="services-header">
                    <h2 className="services-title">
                        About
                    </h2>
                </div>
                <div className="services-list">
                    {servicesJson.map(service => (
                        <div  key={service.title} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <p className="service-description">{service.description2}</p>
                            <a className="button" rel="noopener" target="_blank"  href={service.description3}>Visit me on LinkedIn</a>
                        </div>

                    ))}
                    <img
                        className="services-bg"
                        src={'https:' + bgImage.fields.file.url}
                        alt="jc avatar image"
                    />
                </div>
            </div>


            <style jsx>{`

              .services-wrapper {
                max-width: 1280px;
                margin: 120px auto;
              }
              
              .services-bg img{
                  border-radius: 5px;
                  //margin-top: 30px;
                  margin: 30px auto;
                  //width: 50%;
               }
               
              .services {
                max-width: 1280px;
                margin: 120px 0;
              }
              
              .services-header{
                text-align: center;
              }
              
              .services-title {
                text-transform: uppercase;
                font-size: 36px;
                font-weight: 300;
              }
              
              .services-list {
                height: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 120px 0;
              }
              
              .service-item {
                margin: auto;
                max-width: 379px;
                text-align: center;
              }
              
              .service-description {
                margin: 47px 0;
              }
              
              .service-title {
                font-size: 24px;
                line-height: 1;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: 0.75px;
                margin-bottom: 20px;
              }
            
              //service-item:last-child {
              //  margin-bottom: 0;
              //}
            
              //// Responsive
              //@media only screen and (min-width: 992px) and (max-width: 1199px){
              //  service-item h3 {
              //    font-size: 20px;
              //  }
              //}
              //@media only screen and (min-width: 768px) and (max-width: 991px){
              //  service-item h3 {
              //    font-size: 20px;
              //  }
              //}
              //@media only screen and (max-width: 767px){
              //  service-item h3 {
              //    font-size: 18px;
              //  }
              //}
            
      `}</style>
        </div>
    )
}
