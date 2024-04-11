import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  

  
  about2 = `Web Developer with 2+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 7+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap, MongoDB, Nodejs and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1QCueIjNsGThMdQYJ75hLHOr7yjb6SbCG/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+, Angular (Latest Versions), JavaScript, TypeScript, jQuery, HTML5, CSS3,Angular Material, Bootstrap,Css flex,Css Grid, Markerjs',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS,Restful Api,JWT,',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY,TypeScript',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO,',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Network TroubleShooting,linux,kernel basic,Partitioning Process',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Docker,Git,Jira Kanban Boards',
      'progress': '70%'
    }
  ];


  
  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Software Engineering',
      
      'institution': 'Gomal University,KPK'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  
  



  
  exprienceData: any = [
    {
      id: 4,
      company: 'StepNex Private Limited',
      location: 'Peshawar',
      timeline: 'Aug 2021 to june 2022',
      role: 'Junior Developer',
      work:`Working as a full stack developer .     
     Demonstrated expertise in Angular 9 Ivy, Angular CLI, RxJS, Reactive forms, Angular Material, Ng 
Bootstrap, NPM, Node.js, Express, Schema, Models, Passport-jwt, and bcrypt.
Working as a full stack developer .     
Contributed to the File Tracking System project with the Government of KPK Revenue Authority, 
actively participating in the Software Requirement Specification phase `
},
      

  
    {
      id: 3,
      company: 'Technolog Brainz ',
      location: 'Lahore',
      timeline: 'Present',
      role: 'Angular Developer  ',
      work: `Technologies : Angular , Node JS , MongoDB .
      Successfully delivered multiple web development projects using the latest Angular versions, Node.js, 
and MongoDB .
Proficiently utilized Docker to facilitate smooth deployment and efficient management of application 
containers .
Actively employed Git for version control and seamless code collaboration within the development 
team .

Skillfully managed tasks and tracked progress using Jira boards, ensuring on-time task completion and 
project success .
 Utilized CSS Flex and Grid layouts to create dynamic and responsive user interfaces that adapt to 
various screen sizes and devices .
 Employed markerjs to enable users to add annotations and markers on images, enhancing the user 
experience and interactivity`
    },

  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

   

  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

 
  
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
