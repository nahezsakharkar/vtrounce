<template>
  <div class="container inner-container">
    <div class="header-spacer"></div>
    <AboutHero />
    <AboutIntro />
    <AboutSupporting />
    <AboutWhy />
    <ContactRedirect :chat="chat" />
  </div>
  <!-- <div class="testimonials-carousel" data-v-9cfe8d9a>
      <div class="wrapper" data-v-9cfe8d9a>
        <h2
          class="heading"
          style="transform: translateY(0); opacity: 1"
          data-v-9cfe8d9a
        >
          Our clients.
        </h2>
        <div
          class="intro fs-intro-small"
          style="transform: translateY(0); opacity: 1"
          data-v-9cfe8d9a
        >
          We partner with a diverse range of clients across industries and
          markets. This diversity enables fresh perspectives and insights, which
          gives our clients new and unexpected ways to compete.
        </div>
      </div>
      <div
        class="carousel"
        style="transform: scale(1) translateY(0); opacity: 1"
        data-v-9cfe8d9a
      >
        <div class="swiper-wrapper" data-v-9cfe8d9a>
          <div class="swiper-slide offset-slide" data-v-9cfe8d9a></div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/46769063-1175-4b30-b1b5-93a7132d6177/entire-travel-group_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  From day one, the Team at Devotion carefully considered our
                  business needs, they analysed our industry and competitors,
                  designed a very attractive website and built a solid platform
                  from which our business can grow and expand in the future.
                </div>
                <div class="author" data-v-9cfe8d9a>Brad McDonnell, CEO</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/51fcaaac-2d2b-4cb8-9840-1bae17bf6b50/fleetcare_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  Devotion take the complex process of building a highly
                  engaging digital presence and make it simple. They do this by
                  taking the time to truly understand our business's strategic
                  goals, personas, customer journeys, products and services.
                </div>
                <div class="author" data-v-9cfe8d9a>
                  Kate Walker, Marketing & Brand Manager
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/702f7fcf-ed38-4f9d-b3a2-de027a5ed8f3/wine-selectors_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  Devotion have created an astonishingly beautiful website that
                  truly showcases the Wine Selectors Brand. We are extremely
                  pleased with the outcome and Kentico as an all-round
                  E-commerce CMS.
                </div>
                <div class="author" data-v-9cfe8d9a>
                  Jake Boulton, Head of Digital
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/913ca69a-ccb2-4885-b5c5-ed4eaebf1705/just-better-care_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  With a growing franchise network, Devotion designed and built
                  a custom Kentico website that has been the ideal scalable
                  solution for our continued expansion. They have a terrific
                  team who have supported both our marketing and technical
                  needs.
                </div>
                <div class="author" data-v-9cfe8d9a>
                  Ryan McMahon, Marketing Manager
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/6102e08d-4888-4fc5-8465-09a369e43d6a/sekisui-house_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  The Devotion team have been a key partner with assisting
                  Sekisui House to establish and build our successful brand
                  presence within the Australian property market over the past
                  11 years.
                </div>
                <div class="author" data-v-9cfe8d9a>
                  Craig Barnes, Sales & Marketing Director
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/fc2d0280-aa80-400a-9cb1-31b1dd055288/baby-village_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  True to their name, Devotion showed passion and commitment in
                  systematically learning and understanding the intricacies of
                  our business when formulating a solution for the redevelopment
                  of our website.
                </div>
                <div class="author" data-v-9cfe8d9a>Nathan Pongrass, Owner</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide last" data-v-9cfe8d9a>
            <div class="inner" data-v-9cfe8d9a>
              <div class="logo-container" data-v-9cfe8d9a>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/0c62e4d1-a1f5-4700-8e43-0225770738ff/ahi_logo_colour1350.png?auto=format"
                  class="logo"
                  data-v-9cfe8d9a
                />
              </div>
              <div class="copy" data-v-9cfe8d9a>
                <div class="quote" data-v-9cfe8d9a>
                  We have well and truly found a partner that gets us and what
                  we do, and with a ‘nothing is too hard' attitude, and super
                  responsiveness to any requests, Devotion is a valued partner
                  to our business.
                </div>
                <div class="author" data-v-9cfe8d9a>
                  Pete Murdocca, Technical Services and Strategic Initiatives
                  Manager
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide offset-slide" data-v-9cfe8d9a></div>
        </div>
        <div class="wrapper" data-v-9cfe8d9a>
          <div class="swiper-scrollbar" data-v-9cfe8d9a></div>
        </div>
      </div>
    </div> -->
  <!-- <div class="client-logos" data-v-f2e1acf6>
      <div class="wrapper" data-v-f2e1acf6>
        <div class="swiper-container list carousel" data-v-f2e1acf6>
          <div class="swiper-wrapper">
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/a4d80a45-b2dc-4ae0-8c18-f090e927c416/entire-travel-group_logo_greyscale1350.png?auto=format"
                  alt="Entire Travel Group black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/b41563d5-26bb-4b43-a9c5-e31bb6d2b689/gpt_logo_greyscale1350.png?auto=format"
                  alt="GPT Group black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/503b0345-5c0a-4f58-8504-4b9558872494/wine-australia_logo_greyscale1350.png?auto=format"
                  alt="Wine Australia black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/1ef817ea-abb9-45b5-b811-9323fd5a7a41/g-day-parks_logo_greyscale1350.png?auto=format"
                  alt="G'day Parks black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/9ee3635e-fd5d-4e48-a019-47ba5c1f4612/fleetcare_logo_greyscale1350.png?auto=format"
                  alt="Fleetcare black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/225fedaf-d534-49fc-b5e1-91f0697ad79e/sekisui-house_logo_greyscale1350.png?auto=format"
                  alt="Sekisui House black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/d8107696-f936-4a10-bd7d-dfe187bc79f8/amp-capital_logo_greyscale1350.png?auto=format"
                  alt="AMP Capital black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/4783472f-1f79-471a-9544-8af18f46b9de/wine-selectors_logo_greyscale1350.png?auto=format"
                  alt="Wine Selectors black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/7071ef69-5d7f-433f-89b2-d2d814f9e752/fisher-paykel_logo_greyscale1350.png?auto=format"
                  alt="Fisher & Paykel black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/1212df29-1b69-4600-9737-6365724a1827/farmers-market_logo_white1350.png?auto=format"
                  alt="Farmers Market white transparent logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/35ffa5c9-603c-4852-a622-a641af11a0f3/adventure-world_logo_greyscale1350.png?auto=format"
                  alt="Adventure World black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/f73c178f-4a43-4c11-b8b1-72d3238c44cc/ahi_logo_greyscale1350.png?auto=format"
                  alt="AHI black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/f2d9c102-63a9-413d-9c0d-cde5cb39d59a/amp_logo_greyscale1350.png?auto=format"
                  alt="AMP black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/f8c81529-02f0-4699-941d-395322f112a2/billy-margot_logo_greyscale1350.png?auto=format"
                  alt="Billy + Margot black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/94ea7688-8152-4e81-b81e-ab8600d4cf99/australian-institute-of-sport_logo_greyscale1350.png?auto=format"
                  alt="Australian Institute of Sport black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/bec9a52c-5d29-4d23-bbe0-1d60fe85d7a7/mulpha_logo_greyscale1350.png?auto=format"
                  alt="Mulpha black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/23d5d09a-40ba-4145-b939-54bdaadd5043/australian-wine-discovered_logo_greyscale1350.png?auto=format"
                  alt="Australian Wine Made Our Way black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/166b530f-16c3-47d4-8064-db32c7511902/baby-village_logo_greyscale1350.png?auto=format"
                  alt="Baby Village black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/aa8c035e-5940-4096-a447-31ebe742619d/m%26m_logo_greyscale1350.png?auto=format"
                  alt="M&M's black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/52e18a9f-9e87-4ee2-bc45-b14a82cfd76e/ahi_logo_greyscale-11350.png?auto=format"
                  alt="ALI Group black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/297bd67f-27cc-44a7-8536-3cfc92cd3372/havaianas_logo_greyscale1350.png?auto=format"
                  alt="Havaianas black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/1c92af00-fa18-41e4-a3d7-8080a55924f3/foodie-sharing_logo_greyscale1350.png?auto=format"
                  alt="Foodie black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/d8be39c1-6a9b-4b85-8bd1-73f6bdc27017/scenic-tours_logo_greyscale1350.png?auto=format"
                  alt="Scenic black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/38083a8f-1f90-4413-906a-7a13b18ecc30/blast-one_logo_greyscale1350.png?auto=format"
                  alt="Blast One black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/f2947b9b-f03f-431b-8ace-393a63e2cbf7/goodstart-early-learning_logo_greyscale1350.png?auto=format"
                  alt="Goodstart Early Learning black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/e65dcd5e-efdc-45f4-a9d8-207637c7e573/just-better-care_logo_greyscale1350.png?auto=format"
                  alt="Just Better Care black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/79f85c07-90a1-48af-9df8-fc7c67bbf0eb/haier_logo_greyscale1350.png?auto=format"
                  alt="Haier black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/a8640d64-d4e4-4d5d-9907-931d74920fba/halo_logo_greyscale1350.png?auto=format"
                  alt="Halo Alcoholic Kombucha black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/e6ef22c6-3791-4164-8ab8-4fb2ea858214/heineken_logo_greyscale1350.png?auto=format"
                  alt="Heineken black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/fa7918ce-26c1-4958-9170-0ccb89556a6f/ivory-coat_logo_greyscale1350.png?auto=format"
                  alt="Ivory Coat black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/8f12d271-aad9-4925-a54a-f165d244136d/jmc-academy_logo_greyscale1350.png?auto=format"
                  alt="JMC Academy black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/b2c53df4-807e-45ef-b801-c6c2524a1594/konica-minolta_logo_greyscale1350.png?auto=format"
                  alt="Konica Minolta black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/f93ac027-7cb0-463c-b9fe-fb85e87abea5/macquarie_logo_greyscale1350.png?auto=format"
                  alt="Macquarie Centre black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/7e4ec3fd-6f70-4a15-a6ea-f0cf3c518057/marketplace-gungahlin_logo_greyscale1350.png?auto=format"
                  alt="Marketplace Gungahlin black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/57ae0786-6e21-4a62-a4f9-5742b8b2f95c/mport_logo_greyscale1350.png?auto=format"
                  alt="mPort black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/653c6301-1166-4a0e-bc06-3a6e2ccb20b8/my-mirror_logo_greyscale1350.png?auto=format"
                  alt="My Mirror black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/faf19498-a380-47c0-8861-09e6873f66c3/national-geographic-traveller_logo_greyscale1350.png?auto=format"
                  alt="National Geographic Traveler black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/32fc4e79-8006-489d-a0f8-78b81f52c121/pacific-fair_logo_greyscale1350.png?auto=format"
                  alt="Pacific Fair black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/4bc787ab-a41d-4971-a0d9-bd6a501d3e80/pindan_logo_greyscale1350.png?auto=format"
                  alt="Pindan black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/8cb48151-776f-4073-931c-badaf1eb5897/sony_logo_greyscale1350.png?auto=format"
                  alt="Sony black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/8efc0ef6-449b-4bb5-b0e8-e9cb56dd1212/rauland_logo_greyscale1350.png?auto=format"
                  alt="Rauland black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/0d3d63f7-8c88-48a0-8d03-41562f80a9b8/real-pet-food-company_logo_greyscale1350.png?auto=format"
                  alt="Real Pet Food Company black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/9ae12a19-673a-4775-9d49-5bb26115efd4/csr_logo_greyscale1350.png?auto=format"
                  alt="CSR black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/4e38a939-1dca-48fe-9cec-4b8a85fcbe61/rt-health_logo_greyscale1350.png?auto=format"
                  alt="rt health black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/55a73d6b-b46f-4d06-88e1-83b85686e8bd/yellow-brick-road_logo_greyscale1350.png?auto=format"
                  alt="Yellow Brick Road black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/91578078-698a-461e-a50f-9b86aa775f14/sleepmaker_logo_greyscale1350.png?auto=format"
                  alt="SleepMaker black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/a5c5153b-242a-4e5b-87e5-430cae92720c/hunter-douglas_logo_greyscale1350.png?auto=format"
                  alt="Hunter Douglas black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/c8eadf54-c84a-49d3-a24f-e09990a3caad/sleepyhead_logo_greyscale1350.png?auto=format"
                  alt="Sleepyhead black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/78b7b2d8-ef8f-4f39-926d-ff48bafcbbd0/snowsearch_logo_greyscale1350.png?auto=format"
                  alt="Snowsearch black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/218a285e-27aa-4ba7-b824-8faca2b6a59a/space%26co_logo_greyscale1350.png?auto=format"
                  alt="Space & Co. black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/19a1fcb9-df00-47fa-8d41-2a2bd8c89997/st-james-ethics_logo_greyscale1350.png?auto=format"
                  alt="The Ethics Centre black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/e39437c7-ffe4-441d-b477-43ca631c8119/tarkett_logo_greyscale1350.png?auto=format"
                  alt="Tarkett black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/4104b1bb-53a4-451d-b23d-86c0ec392d9f/sydney-airport_logo_greyscale1350.png?auto=format"
                  alt="Sydney Airport black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/8eb34412-81b7-4ede-b9e2-a669c50f36f2/tenx_logo_greyscale1350.png?auto=format"
                  alt="TenX Pro black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/fcf281a0-78ce-4ec7-ab7b-447f7e500771/dexus_logo_greyscale1350.png?auto=format"
                  alt="Dexus black and white logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/6ebc84f1-cedf-4b14-ac23-905a8598dc6c/canwell-australia_logo_greyscale1350.png?auto=format"
                  alt="Canwell Australia greyscale logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
            <div class="item swiper-slide" data-v-f2e1acf6>
              <div class="image" data-v-f2e1acf6>
                <img
                  src="../../assets-au-01.kc-usercontent.com_443/fbb47826-c8ea-0217-55d4-9e4d47596d5a/dd5845e7-735a-4b4b-9f3d-9c5034c823e2/openmarkets_logo_greyscale1350.png?auto=format"
                  alt="Openmarkets greyscale logo | Devotion"
                  data-v-f2e1acf6
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <!-- <div class="leadership-hotspots" data-v-ca00c3e6>
      <div class="wrapper" data-v-ca00c3e6>
        <h2 style="transform: translateY(0); opacity: 1" data-v-ca00c3e6>
          Our leadership team.
        </h2>
        <div class="hotspot-container" data-v-ca00c3e6>
          <div class="hotspot-image" data-v-ca00c3e6>
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-1.a345b07.png"
              alt
              class="person5"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-2.bfdee3e.png"
              alt
              class="person3"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-3.ee50790.png"
              alt
              class="person1"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-4.9f9c493.png"
              alt
              class="person2"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-5.78f29c4.png"
              alt
              class="person4"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <img
              src="../_nuxt/img/Devotion_Leadership-team-July2021-6.cb3eb3d.png"
              alt
              class="person6"
              style="transform: translateX(0); opacity: 1"
              data-v-ca00c3e6
            />
            <div class="hotspots" style="opacity: 1" data-v-ca00c3e6>
              <a
                href="leadership/andrew-whitehead/index.html"
                class="hotspot"
                style="left: 27%; top: 64%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6>
                  Meet Andrew
                </span></a
              ><a
                href="leadership/kristian-bortnik/index.html"
                class="hotspot"
                style="left: 43%; top: 61%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6>
                  Meet Kristian
                </span></a
              ><a
                href="leadership/sarah-campbell/index.html"
                class="hotspot"
                style="left: 55%; top: 77%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6>
                  Meet Sarah
                </span></a
              ><a
                href="leadership/joe-peschardt/index.html"
                class="hotspot"
                style="left: 68%; top: 53%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6> Meet Joe </span></a
              ><a
                href="leadership/wesley-joseph/index.html"
                class="hotspot"
                style="left: 86%; top: 62%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6>
                  Meet Wesley
                </span></a
              ><a
                href="leadership/connor-chmielewski/index.html"
                class="hotspot"
                style="left: 13%; top: 66%"
                data-v-ca00c3e6
                ><span class="hotspot-circle" data-v-ca00c3e6></span>
                <span class="hotspot-icon" data-v-ca00c3e6
                  ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-ca00c3e6
                  >
                    <path
                      d="M14.0312 6.6875H8.6875V1.34375C8.6875 1.04688 8.39062 0.75 8.09375 0.75H6.90625C6.57227 0.75 6.3125 1.04688 6.3125 1.34375V6.6875H0.96875C0.634766 6.6875 0.375 6.98438 0.375 7.28125V8.46875C0.375 8.80273 0.634766 9.0625 0.96875 9.0625H6.3125V14.4062C6.3125 14.7402 6.57227 15 6.90625 15H8.09375C8.39062 15 8.6875 14.7402 8.6875 14.4062V9.0625H14.0312C14.3281 9.0625 14.625 8.80273 14.625 8.46875V7.28125C14.625 6.98438 14.3281 6.6875 14.0312 6.6875Z"
                      fill="white"
                      data-v-ca00c3e6
                    ></path></svg
                ></span>
                <span class="hotspot-label" data-v-ca00c3e6>
                  Meet Connor
                </span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <!-- <div class="devotee-intro" data-v-21db18a6>
      <div class="text" style="transform: scale(1); opacity: 1" data-v-21db18a6>
        <h3 data-v-21db18a6>
          Devotee [dev-oh-tee, -tey] - A person ardently enthusiastic about or
          devoted to something, such as a sport, a place or a pastime.
        </h3>
        <h4 data-v-21db18a6>
          Devotee's are devoted to more than just work, and that passion drives
          devotion.
        </h4>
      </div>
    </div> -->
  <!-- <div class="devotee-tiles" data-v-4f08c1ea>
      <div class="arrow" data-v-4f08c1ea></div>
      <div class="tile-container" data-v-4f08c1ea></div>
    </div> -->
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import AboutHero from '../components/AboutComponents/AboutHero.vue'
import AboutIntro from '../components/AboutComponents/AboutIntro.vue'
import AboutSupporting from '../components/AboutComponents/AboutSupporting.vue'
import AboutWhy from '../components/AboutComponents/AboutWhy.vue'
import ContactRedirect from '../components/CommonComponents/ContactRedirect.vue'

export default {
  name: 'AboutUs',
  components: {
    AboutHero,
    AboutIntro,
    AboutSupporting,
    AboutWhy,
    ContactRedirect,
  },
  data() {
    return {
      chat: "Let's chat about how we can work together.",
    }
  },
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
}
</script>

<style>
/* dawdawd */
</style>