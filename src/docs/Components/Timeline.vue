<template>
    <ul class="timeline">
        <li v-for="(timeline, index) in timelines" data-aos="zoom-in-up" data-aos-duration="200" :data-aos-delay="100 * index" data-aos-anchor-placement="center-bottom">
            <div class="timeline-badge primary"><i class="glyphicon glyphicon-check"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading text-center">
                        <h4 class="timeline-title text-break">{{ timeline.title }}</h4>
                        <p class="text-break"><small class="text-muted"><i class="glyphicon glyphicon-time"></i> {{ timeline.date }} </small></p>
                    </div>
                    <div class="timeline-body text-center text-break">
                        <p>{{ timeline.address }}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Timeline',
    data() {
        return {
            timelines: [
              {
                  title: 'AWS Innovate - Modern Apps Edition',
                  date: '10/27/2021 to 10/28/2021',
                  address: 'Amazon Web Services (AWS)'
              },
              {
                  title: 'AWS User Group PH - Monthly Meetup For October',
                  date: '10/21/2021 to 10/21/2021',
                  address: 'AWS User Group Philippines'
              },
              {
                  title: 'AWS CloudFormation Master Class v2',
                  date: '10/15/2021 to 10/17/2021',
                  address: 'Udemy Course'
              },
              {
                  title: 'AWS User Group PH - Monthly Meetup For September',
                  date: '09/23/2021 to 09/23/2021',
                  address: 'AWS User Group Philippines'
              },
              {
                  title: 'Ultimate AWS Certified Developer Associate 2021 - NEW!',
                  date: '08/15/2021 to 08/31/2021',
                  address: 'Udemy Course'
              },
              {
                  title: 'Laravel with Vue.js - Fullstack Web Development (2020)',
                  date: '06/05/2021 to 06/20/2021',
                  address: 'Udemy Course'
              },
              {
                  title: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2021',
                  date: '04/04/2021 to 04/11/2021',
                  address: 'Udemy Course'
              },
              {
                  title: 'Google I/O Extended Manila',
                  date: '08/10/2019 to 08/10/2019',
                  address: 'The Globe Tower, 32th Street corner 7th Avenue, Bonifacio Global City, Taguig City 1633 Metro Manila'
              },
              {
                  title: 'Programmers Developers Meetup #8',
                  date: '05/02/2019 to 05/02/2019',
                  address: '6750 Ayala Avenue, 6750, Makati, Metro Manila'
              },
              {
                  title: 'Vue Manila 3rd Meetup',
                  date: '03/17/2019 to 03/17/2019',
                  address: 'Orange & Bronze Software Lab, Carlos J. Valdes Building, 108 Aguirre, Legazpi Village, Makati, Metro Manila'
              },
              {
                  title: '7th PSITE-NCR Student IT Congress',
                  date: '01/23/2019 to 01/23/2019',
                  address: 'Adamson University, 900 San Marcelino St, Ermita, Manila, 1000 Metro Manila'
              },
              {
                  title: '11th Information Technology Innovations Congress 2018 (eGlobio)',
                  date: '08/27/2018 to 08/27/2018',
                  address: 'Tanghalang Pasigueño, Pasig City Hall Complex, Caruncho Ave, Pasig, Metro Manila'
              },
              {
                  title: 'iSITE Regional Student Conference',
                  date: '08/01/2018 to 08/01/2018',
                  address: 'Colegio de San Juan de Letran Calamba, Bucal Bypass Rd, Calamba, 4027 Laguna'
              },
              {
                  title: '2-day Training in Basic Web Development using PHP and Laravel',
                  date: '06/23/2018 to 06/24/2018',
                  address: 'Tycoon Center Bldg., Pearl Dr, San Antonio, Pasig, Metro Manila'
              },
              {
                  title: 'Campus DEVCON PH',
                  date: '09/22/2017 to 09/22/2017',
                  address: 'Pamantasan ng Lungsod ng Maynila, General Luna, corner Muralla St, Intramuros, Manila, 1002 Metro Manila'
              },
              {
                  title: 'Accenture: Shaping the Future Forum',
                  date: '07/29/2017 to 07/29/2017',
                  address: 'Maybank Performing Arts Theater, 26th St, Taguig, Metro Manila'
              },
              {
                  title: 'Build Reactive Web Components and Real-time Database: VueJS + Node.js + Socket.io + NoSQL Database',
                  date: '05/06/2017 to 05/06/2017',
                  address: 'Tycoon Center Bldg., Pearl Dr, San Antonio, Pasig, Metro Manila'
              }
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  right: 25px;
  margin-left: -1.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: calc( 100% - 75px );
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  background: #fff;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}
.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  right: 0px;
  margin-left: -25px;
  background-color: #999999;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-badge.primary {
  background-color: #0c8b91 !important;
}
.timeline-badge.success {
  background-color: #3f903f !important;
}
.timeline-badge.warning {
  background-color: #ebad04 !important;
}
.timeline-badge.danger {
  background-color: #d9534f !important;
}
.timeline-badge.info {
  background-color: #5bc0de !important;
}
.timeline-title {
  margin-top: 0;
  font-size: 1rem;
  font-weight: bold;
  color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
  font-size: 0.8rem;
}
.timeline-body > p + p {
  margin-top: 5px;
}

</style>
