<template>
  <div class="faq">
    <div class="inner">
      <h2 data-aos="fade-up">Services Q&A</h2>
      <div class="items">
        <!-- ---- -->
        <!-- <div v-for="q in qna" :key="q.id" data-aos="fade-up" class="item">
          <div class="question">
            <h4>{{ q.question }}</h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              {{ q.answer }}
            </div>
          </div>
        </div> -->
        <!-- ---- -->
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>
              I already have an internal team, why should I partner with an
              agency?
            </h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                Agencies, especially in the digital space, bring specialist
                skills to the table. These skills may be unique or complementary
                to those you already have, but the key is they're focused and
                singular in their objectives. Internal teams are often spread
                too thin, have competing interests, or struggle to find a common
                position with stakeholders; this is where a third party can play
                a critical role. As an agency, we immerse ourselves in your
                business and your brand and bring an outsider's perspective to
                every challenge. We work in partnership with your internal team
                to ensure every solution we deliver is insight-driven and builds
                end-customer engagement.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>Does VTrounce have experience in my industry?</h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                We have experience across almost (there's always an exception)
                every industry. We don't specialise in any vertical, but prefer
                to work across sectors to ensure we remain innovative,
                effective, and challenged. We consider ourselves experts in
                understanding and engaging audiences, irrespective of the
                industry. Our process supports this position, focusing on brand
                and product immersion upfront, so the solution we deliver
                answers your customer's specific needs.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>What does full service digital mean?</h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                Full-service digital means we offer all digital services
                in-house. These range from insight and data-led strategies, to
                customer-centric websites, apps, and technical solutions, to
                digital marketing, where we use omnichannel marketing solutions
                to grow your business. We do this with one team and one point of
                contact, meaning it's a seamless and simple engagement for you
                and an integrated and best-practice solution from us.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>Are you an independent agency?</h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                We're 100% independent and proud of it. This independence allows
                us to work in a manner best suited to us, to you, and the
                project at hand. Big agency relationships do not constrain us,
                and ultimately, we value every single engagement equally. Put
                simply, being independent means we care as it's personal.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>
              Why should I work with VTrounce? Why's it better than the rest?
            </h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                We're obviously biased, but when you work with VTrounce, you
                work with a passionate team that is driven to make a difference.
                When asked why, we typically give five key reasons:
              </p>
              <ul>
                <ul>
                  <li>
                    We're <strong>customer-first</strong>, always. Everything we
                    do starts and ends with your customer.
                  </li>
                  <li>
                    We're <strong>relationship-focused</strong>. We have a
                    proven record of longstanding relationships with clients and
                    each other.
                  </li>
                  <li>
                    We're <strong>people-powered</strong>. We're a team of
                    devotees with exceptional belief in each other and what we
                    do.
                  </li>
                  <li>
                    We're <strong>results-driven</strong>. Everything we do
                    focuses on delivering meaningful and measurable results.
                  </li>
                  <li>
                    We're <strong>quality-obsessed</strong>. We live and die by
                    the quality of our work, and being independent means every
                    project counts.
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="item">
          <div class="question">
            <h4>How do I get started?</h4>
            <fa :icon="fas.faPlus" class="plus" />
            <fa :icon="fas.faMinus" class="minus" />
          </div>
          <div class="answer">
            <div class="answer-inner">
              <p>
                We make getting started easy. Simply pick up the phone or
                complete our
                <nuxt-link to="/contact-us">online briefing form</nuxt-link>,
                and one of our team will be in touch. From there, we'll arrange
                a meet and greet session, an introductory workshop, or a
                briefing session, whatever's most appropriate to your needs.
                We'll outline the proposed process right upfront and hold your
                hand throughout to ensure expectations are met, and the process
                is simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'ServiceFAQ',
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
  mounted() {
    const faqs = document.querySelectorAll('.item')
    faqs.forEach((faq) => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('active')
      })
    })
  },
  // methods: {
  //   RevertVisibility() {
  //     this.AnswerVisible = !this.AnswerVisible
  //   },
  // },
}
</script>

<style scoped>
.faq {
  background-color: #f6f6f6;
  padding: 40px 20px;
  position: relative;
}

@media (min-width: 768px) {
  .faq {
    padding: 80px 20px;
  }
}

.faq.has-avatar {
  margin-top: 110px;
}

@media (min-width: 768px) {
  .faq.has-avatar {
    margin-top: 160px;
  }
}

@media (min-width: 1025px) {
  .faq.has-avatar {
    margin-top: 180px;
  }
}

.faq h4 {
  padding-right: 25px;
}

h2 {
  margin-top: 0;
  text-align: center;
}

/* .title {
  margin-top: 10px;
  text-align: center;
}

.avatars {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: -230px auto 20px;
}

@media (min-width: 768px) {
  .avatars {
    margin-top: -110px;
  }
}

.avatars .avatar {
  margin-top: 115px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.avatars .image-mask {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  z-index: 1;
  transition: all 0.3s ease;
  margin: 0 8px;
  width: 140px;
  height: 140px;
}

@media (min-width: 768px) {
  .avatars .image-mask {
    width: 160px;
    height: 160px;
    margin-top: -160px;
  }
}

@media (min-width: 1025px) {
  .avatars .image-mask {
    width: 200px;
    height: 200px;
    margin-top: -180px;
  }
}

.avatars .image {
  width: 300px;
  height: 250px;
  margin-left: -150px;
  position: absolute;
  left: 50%;
  top: 0;
  background-size: cover;
  background-position: top;
  display: block;
}

@media (min-width: 768px) {
  .avatars .image {
    width: 340px;
    margin-left: -170px;
    height: 270px;
  }
}

@media (min-width: 1024px) {
  .avatars .image {
    width: 320px;
    margin-left: -160px;
    height: 270px;
  }
}

@media (min-width: 1025px) {
  .avatars .image {
    width: 380px;
    margin-left: -190px;
    height: 320px;
  }
} */

.inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
}

.items {
  margin-top: 30px;
}

.item {
  margin-top: 3px;
}

.question {
  background-color: #ededed;
  padding: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.question::after,
.question::before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  background-color: #333;
  transition: height 0.3s ease, opacity 0.3s ease;
  height: 0;
  opacity: 0;
}

.question::before {
  top: 50%;
}

.question::after {
  bottom: 50%;
}

@media (min-width: 1025px) {
  .question:hover::after,
  .question:hover::before {
    opacity: 0.1;
    height: 50%;
  }
}

.item.active .question {
  background-color: transparent;
}

.minus,
.plus {
  height: 20px;
  width: 20px;
  fill: none;
  color: #ea1e2b;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.minus {
  opacity: 0;
}

.item.active .minus,
.item.active .plus {
  transform: translateY(-50%) rotate(0);
}

.item.active .minus {
  opacity: 1;
}

.item.active .plus {
  opacity: 0;
}

.answer {
  max-height: 0;
  transition: max-height 0.7s ease;
  overflow: hidden;
}

.item.active .answer {
  max-height: 725px;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: -4px;
}

@media (min-width: 1025px) {
  .item.active .answer {
    max-height: 285px;
  }
}

@media (min-width: 768px) {
  .item.active .answer {
    max-height: 400px;
  }
}

@media (min-width: 400px) {
  .item.active .answer {
    max-height: 725px;
  }
}

.answer-inner {
  padding: 0 20px 20px;
}
</style>