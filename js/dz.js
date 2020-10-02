$('document').ready(function () {

    $('.dz-news__topStories-subHeader_fashion').click(function() {
        $('.dz-news__topStories-main_content2').hide('slow');
        $('.dz-news__topStories-main_content3').hide('slow');
        $('.dz-news__topStories-main_content1').show('slow');
    });

    $('.dz-news__topStories-subHeader_cinema').click(function() {
        $('.dz-news__topStories-main_content1').hide('slow');
        $('.dz-news__topStories-main_content3').hide('slow');
        $('.dz-news__topStories-main_content2').show('slow');
    });

    $('.dz-news__topStories-subHeader_television').click(function() {
        $('.dz-news__topStories-main_content2').hide('slow');
        $('.dz-news__topStories-main_content1').hide('slow');
        $('.dz-news__topStories-main_content3').show('slow');
    });

});