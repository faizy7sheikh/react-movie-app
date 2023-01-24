import React from 'react'
import flower from '../assets/rose.jpg'
import './Crousel.css';

const Crousel = () => {
    const slider = [
        {
            'img': '../assets/rose.jpg',
            'title': 'Title 1',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 2',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 3',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 4',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 5',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 2',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 3',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 4',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        },
        {
            'img': 'path of image',
            'title': 'Title 5',
            'duration': 254,
            'Actor': 'Salman Khan',
            'Director': 'Aatif Aslam',
            'Year': 2023,
            'rating': 5
        }
    ];
    return (
        <div className='row crousel'>

            {
                slider.map((slidr, index) => {
                    return (
                        <>
                            <div className='slider' key={index}>
                                <img src={flower} />
                            </div>
                            {/* <div>
                                <h4>{slider[index].title}</h4>
                            </div> */}
                        </>
                    );
                })
            }
        </div>
    )
}

export default Crousel