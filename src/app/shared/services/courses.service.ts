import { Injectable } from '@angular/core';

export interface Courses {
  id: number;
  name: string;
  description: string;
  lessons: Array<string>;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Courses[] = [
    {id: 1,
      name: 'HTML5 & CSS3 Starter',
      // tslint:disable-next-line:max-line-length
      description: 'The course consists of eight logically interconnected lessons, in which the learner will get acquainted with the HTML markup language, learn how to create an HTML page. Familiarizes with Cascading Style Sheets - CSS for web page design.',
      lessons: [
        'Introduction to HTML5',
        'Work with images, tables and lists',
        'Cascading CSS3 Style Sheets Part 1',
        'Cascading CSS3 Style Sheets Part 2',
        'Positioning elements. Types of layout.',
        'HTML5 semantics. New tags. ',
        'Forms. Meta Tags.',
        'Page layout. Practice'],
      img: '../assets/images/html5_css3_starter.png'},
    {id: 2,
      name: 'JavaScript Essential',
      // tslint:disable-next-line:max-line-length
      description: 'This video course contains a set of video lessons that helps novice developers to understand JavaScript from scratch. The Javascript EssentiaI course examines in detail variables, data types, conditional structures, logical operations, cyclic structures, the principles of creating and using functions, objects, and the basics of working with data arrays.',
      lessons: [
        'Introduction to JavaScript',
        'Logical structures',
        'Arrays',
        'Functions',
        'Objects',
        'Practice',
        'Practice'],
      img: '../assets/images/js_essential.jpg'},
    {id: 3,
      name: 'JavaScript Advanced',
      // tslint:disable-next-line:max-line-length
      description: 'This course helps you to learn how to work with objects, create constructor functions, work with the DOM tree of a page, and process events of document elements. This video course helps you to move to the new level of ownership of the most common scripting programming language.',
      lessons: [
        'Constructors and prototypes',
        'Work with documents',
        'Window. Regular Expressions',
        'CSS and JavaScript',
        'Events and event processing (Part 1)',
        'Events and event processing (Part 2)',
        'Forms and elements of forms',
        'Cookies and data storage mechanisms on the client',
        'Work with graphics on the client side',
        'Ajax and work with HTTP protocols'],
      img: '../assets/images/js_advanced.jpg'},
    {id: 4,
      name: 'Bootstrap 4',
      // tslint:disable-next-line:max-line-length
      description: 'Bootstrap 4 is an HTML, CSS, JS framework for crossbrowser web-based interfaces development. Bootstrap presents a toolkit from Twitter designed to facilitate the development of web applications and websites, uses CSS and HTML for printing, forms, buttons, tables, grids, navigation, etc., as well as additional JavaScript extensions that simplify the work of the web developer.',
      lessons: [
        'Introducing Bootstrap 4',
        'Typography Bootstrap 4',
        'Bootstrap 4 Components',
        'JavaScript Bootstrap 4',
        'Utilities Bootstrap 4'],
      img: '../assets/images/bootstrap4.png'},
    {id: 5,
      name: 'HTML5 & CSS3 Advanced',
      // tslint:disable-next-line:max-line-length
      description: 'The course consists of 7 lessons, where students familiarize themselves with the new features of HTML5 & CSS3. Students will consider the use of flexible layout, implementation of animation, use of browser vaults and multithreading, as well as connecting preprocessors and assembler to display the cross-browser of a web page on various devices.',
      lessons: [
        'Introduction, microdata and user data. Geolocation',
        'Canvas',
        'Client side data storage. Audio, Video',
        'Layout building principles, Flex, Grid, Site templates',
        'Animations and gradients',
        'SASS basics',
        'Practice'],
      img: '../assets/images/html5-css3-advanced.jpg'},
    {id: 6,
      name: 'TypeScript Fundamentals',
      // tslint:disable-next-line:max-line-length
      description: 'The Typescript Fundamentals video course helps learn everything you need to start using this programming language. Throughout these lessons, you learn how to use the tools for developing and compiling code and master the syntax constructs that are in TypeScript.',
    lessons: [
      'Variables and Functions',
      'Classes and Interfaces',
      'Generics',
      'Modules and Namespaces',
      'Practice'],
      img: '../assets/images/typescript.png'},
    {id: 7,
      name: 'Angular Essential',
      // tslint:disable-next-line:max-line-length
      description: 'The Angular Essential video course is designed for studying Angular, which is a redesigned and improved version of the popular AngularJS framework.',
      lessons: [
        'Introduction',
        'Components',
        'Directives',
        'Services',
        'Routing',
        'Forms',
        'HTTP'],
      img: '../assets/images/angular.png'},
    ];

  getAll(): Courses[] {
    return this.courses;
  }

  getOne(id: number): Courses {
    return this.courses.find((elem) => elem.id === id);
  }
}
