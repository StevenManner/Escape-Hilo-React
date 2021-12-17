import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Escape Hilo</title>
        <meta
          name="description"
          content="This will be the repository for Escape Hilo's rebuild."
        />
        <meta property="og:title" content="Escape Hilo" />
        <meta
          property="og:description"
          content="This will be the repository for Escape Hilo's rebuild."
        />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['Container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>Jungle Mystery</h1>
            <span className={styles['text01']}>
              <span>
                Jungle Escape! You&apos;re in a Jungle decorated room. You have
                60 minutes to solve the puzzles and find the clues so you can
                escape.
              </span>
            </span>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Click Here To Book Your Escape!
            </button>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['Section1']}>
        <div className={styles['container03']}>
          <div className={styles['Container04']}>
            <h6 className={styles['text03']}>
              <span>Escape hilo presents</span>
            </h6>
            <h3 className={` ${styles['text05']} ${projectStyles['healine']} `}>
              YOUR MISSION: ROOM 1 - JUNGLE MYSTERY
            </h3>
          </div>
          <div className={styles['CardsContainer']}>
            <div className={styles['Card1']}>
              <div className={styles['container05']}></div>
              <h6
                className={` ${styles['text06']} ${projectStyles['textXL']} `}
              >
                Follow The Clues
              </h6>
              <span className={styles['text07']}>
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </span>
            </div>
            <div className={styles['Card2']}>
              <div className={styles['container06']}></div>
              <h6
                className={` ${styles['text08']} ${projectStyles['textXL']} `}
              >
                Find The Keys
              </h6>
              <span className={styles['text09']}>
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </span>
            </div>
            <div className={styles['Card3']}>
              <div className={styles['container07']}></div>
              <h6
                className={` ${styles['text10']} ${projectStyles['textXL']} `}
              >
                Solve The Mystery
              </h6>
              <span className={styles['text11']}>
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </span>
            </div>
          </div>
          <div className={styles['CardsContainer1']}>
            <div className={styles['Card21']}>
              <div className={styles['container08']}></div>
              <h6
                className={` ${styles['text12']} ${projectStyles['textXL']} `}
              >
                Time Limit
              </h6>
              <span className={styles['text13']}>
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </span>
            </div>
          </div>
          <div className={styles['WorkWithUs']}>
            <div className={styles['container09']}>
              <div className={styles['container10']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3
                className={` ${styles['text14']} ${projectStyles['healine']} `}
              >
                Don&apos;t let US tell you its fun. Let&apos;s hear from past
                visits:
              </h3>
              <span className={styles['text15']}>
                <span className={styles['text16']}>
                  &quot;Awesome game, awesome time. This was my first time
                  playing and what I had envisioned it to be; it was exactly
                  that. It was exciting, challenging, and completely well
                  thought out. &quot; - Holly
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text19']}>&quot;</span>
                <span className={styles['text20']}>
                  The experience was amazing. Unlike anything else in Hilo.
                  Definitely would recommend to any locals or anyone visiting
                  the island.&quot; - Elias
                </span>
                <br></br>
                <span>â</span>
                <span className={styles['text23']}></span>
                <br></br>
                <span className={styles['text25']}>
                  &quot;We have done a couple of escape rooms before and this
                  one was really ingenious - Challenging enough to be fun but
                  not too hard. A great way to spend an hour in Hilo!&quot; -
                  Jim
                </span>
                <br></br>
                <span></span>
                <br>lias</br>
              </span>
            </div>
            <div className={styles['container11']}>
              <div className={styles['container12']}>
                <img
                  alt="image"
                  src="/playground_assets/2-1400w.jpg"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['container13']}></div>
              <div className={styles['container14']}>
                <h4
                  className={` ${styles['text28']} ${projectStyles['healine']} `}
                >
                  <span className={styles['text29']}>
                    93 FIVE STAR REVIEWS AND COUNTING ON GOOGLE
                  </span>
                </h4>
                <span className={styles['text30']}>
                  <span>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container15']}>
          <div className={styles['container16']}>
            <img
              alt="image"
              src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-200h.png"
              className={styles['image3']}
            />
            <span className={styles['text32']}>
              &quot;What a cool place. Every escape room has its own uniqueness.
              This one did not disappoint. The game master is really cool and
              exciting. The theme is great. Canât give away any details or it
              will ruin the fun. Definitely recommend.&quot;
            </span>
          </div>
          <div className={styles['container17']}>
            <img
              alt="image"
              src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-200h.png"
              className={styles['image4']}
            />
            <span className={styles['text33']}>
              &quot;What a cool place. Every escape room has its own uniqueness.
              This one did not disappoint. The game master is really cool and
              exciting. The theme is great. Canât give away any details or it
              will ruin the fun. Definitely recommend.&quot;
            </span>
          </div>
          <div className={styles['container18']}>
            <img
              alt="image"
              src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-200h.png"
              className={styles['image5']}
            />
            <span className={styles['text34']}>
              &quot;What a cool place. Every escape room has its own uniqueness.
              This one did not disappoint. The game master is really cool and
              exciting. The theme is great. Canât give away any details or it
              will ruin the fun. Definitely recommend.&quot;
            </span>
          </div>
          <div className={styles['container19']}>
            <img
              alt="image"
              src="/playground_assets/kisspng-5-star-guest-house-car-dealership-film-scratches-5b4ab62ac141e9.4054372515316229547916-removebg-preview-200h.png"
              className={styles['image6']}
            />
            <span className={styles['text35']}>
              &quot;What a cool place. Every escape room has its own uniqueness.
              This one did not disappoint. The game master is really cool and
              exciting. The theme is great. Canât give away any details or it
              will ruin the fun. Definitely recommend.&quot;
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image7']}
        />
      </div>
      <div className={styles['Section2']}>
        <div className={styles['container20']}>
          <h6 className={styles['text36']}>THE ONES WHO GOT AWAY</h6>
          <h3 className={` ${styles['text37']} ${projectStyles['healine']} `}>
            The victors!
          </h3>
          <span className={` ${styles['text38']} ${projectStyles['textXL']} `}>
            <span className={styles['text39']}>
              Below is our wall of peopleÂ 
            </span>
          </span>
        </div>
        <div className={styles['Team']}></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
