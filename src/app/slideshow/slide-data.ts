import { TitelSlide, Slide } from './slide';
import { SlideshowComponent } from './slideshow.component';

export const TITELSLIDE: TitelSlide = {
 titel: 'Slideshow'
};

export const SLIDES: Slide[] = [
    { id: 1, titel: 'Planning', items: ['Oreilly: TS cursus', 'Samenvatting', 'Theoretische kant Angular', 'To do app', 'Github, Github Pages', 'Tour of Heroes', 'Project uit elkaar halen', 'Slideshow']},
    { id: 2, titel: 'TypeScript', items: ['Oreilly', 'JavaScript', 'Samenvatting']},
    { id: 3, titel: 'Angular', items: ['YouTube', 'Angular Docs', 'To Do', 'Tour of Heroes']},
    { id: 4, titel: 'To Do', items: ['Discord groep / dev community', 'Code Labs', 'Eigen projecten']}
];