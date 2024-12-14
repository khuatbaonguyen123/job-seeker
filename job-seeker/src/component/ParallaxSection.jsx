import React from 'react';

export const ParallaxSection = ({ title }) => {
  return (
    <section className="overlape">
      <div className="block no-padding">
        <div
          className="parallax scrolly-invisible no-parallax"
          data-velocity="-.1"
          style={{
            background: 'url(images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent',
          }}
        ></div>
        {/* PARALLAX BACKGROUND IMAGE */}
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

