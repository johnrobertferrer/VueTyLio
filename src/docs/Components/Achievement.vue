<template>
    <ul class="timeline">
        <li v-for="(timeline, index) in timelines" data-aos="zoom-in-up" data-aos-duration="200" :data-aos-delay="100 * index" data-aos-anchor-placement="center-bottom">
            <div class="timeline-badge warning"><i class="glyphicon glyphicon-check"></i></div>
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
                    title: 'Freelancer (Web Development) In Fiverr',
                    date: '2020',
                    address: 'Fiverr'
                },
                {
                    title: 'Hired As Full-time Software Engineer Position In Nelsoft Systems Inc.',
                    date: '2020',
                    address: '1518 F T Benitez, Manila, Metro Manila, Manila, 1004 Metro Manila'
                },
                {
                    title: 'First Runner Up, PLM Leadership Training',
                    date: '2019',
                    address: 'Pamantasan ng Lungsod ng Maynila, General Luna, corner Muralla St, Intramuros, Manila, 1002 Metro Manila'
                },
                {
                    title: 'Hired as Intern Full Stack Web Developer Position In Captivate Solutions',
                    date: '2018',
                    address: '1518 F T Benitez, Manila, Metro Manila, Manila, 1004 Metro Manila'
                },
                {
                    title: 'Top 2 In All Third Year, Information Technology Students',
                    date: '2018',
                    address: 'Pamantasan ng Lungsod ng Maynila, General Luna, corner Muralla St, Intramuros, Manila, 1002 Metro Manila'
                },
                {
                    title: 'Top 2 In All Second Year, Information Technology Students',
                    date: '2018',
                    address: 'Pamantasan ng Lungsod ng Maynila, General Luna, corner Muralla St, Intramuros, Manila, 1002 Metro Manila'
                },
                {
                    title: 'Top 2 In All First Year, Information Technology Students',
                    date: '2018',
                    address: 'Pamantasan ng Lungsod ng Maynila, General Luna, corner Muralla St, Intramuros, Manila, 1002 Metro Manila'
                },
                {
                    title: 'First Honorable Mention',
                    date: '2015',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
                {
                    title: 'First Place In Web Page Designing, Technolympics, Division Skills Competition',
                    date: '2015',
                    address: 'Benigno "Ninoy" S. Aquino High School, Aguho, Makati, Kalakhang Maynila'
                },
                {
                    title: 'Layout Artist Of The Year',
                    date: '2015',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
                {
                    title: 'M.Y.M. Leadership Award',
                    date: '2015',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
                {
                    title: 'Elected As M.Y.M President',
                    date: '2014',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
                {
                    title: 'MTAP Division, Written Category Contestant',
                    date: '2014',
                    address: 'Benigno "Ninoy" S. Aquino High School, Aguho, Makati, Kalakhang Maynila'
                },
                {
                    title: '2nd Place In MTAP, Written Category',
                    date: '2014',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
                {
                    title: 'Elected As Vice President For Historical Club',
                    date: '2013',
                    address: 'Fort Bonifacio High School, Dr Jose P. Rizal Ext, Makati, Metro Manila'
                },
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
