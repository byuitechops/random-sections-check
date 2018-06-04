const cheerio = require('cheerio');

module.exports = (course, stepCallback) => {

    let quizFiles = course.content.filter(item => item.name.includes('quiz_d2l_'));

    quizFiles.find(quizFile => {
        let $ = quizFile.dom;

        var randomSectionObjects = $('section[ident*="RAND_"]').get().map(randomSectionElement => {
            return {
                quiz: $('assessment').get(0).attribs.title,
                sectionTitle: randomSectionElement.attribs.title,
                displayedCount: $(randomSectionElement).find('fieldentry').first().html()
            }
        });

        randomSectionObjects.forEach(section => {
            course.log('Course uses Random Sections in Quizzes', {
                'Quiz': section.quiz,
                'Section Title': section.sectionTitle,
                'Number Displayed to User': section.displayedCount
            });
        });

    })

    stepCallback(null, course);
};