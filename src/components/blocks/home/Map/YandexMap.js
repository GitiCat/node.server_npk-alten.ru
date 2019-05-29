import React from "react"
import {Container} from "react-bootstrap"

class YandexMap extends React.Component {

    componentWillMount() {
        ymaps.ready(function() {
            var YMap = new ymaps.Map('yandex-map__id', {
                center: [55.726272, 38.206732],
                zoom: 15.5,
                controls: ['typeSelector', 'fullscreenControl']
            });

            var multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    [55.728858, 38.204479],
                    [55.723559, 38.204893]
                ]}, 
                {
                boundsAutoApply: false,
                typeSelectorSize: 'small'
            });
            YMap.geoObjects.add(multiRoute);
        });
    }

    render() {
        return(
            <Container as="div" id="yandex-map__id" bsPrefix="yandex-map"></Container>
        );
    }
}

export default YandexMap;