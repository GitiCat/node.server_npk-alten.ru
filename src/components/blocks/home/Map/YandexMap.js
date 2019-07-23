import React from "react"
import {Container} from "react-bootstrap"

class YandexMap extends React.Component {

    componentWillMount() {
        if(typeof(ymaps) !== 'undefined') {
            ymaps.ready(function() {
                let YMap = new ymaps.Map('yandex-map__id', {
                    center: [55.726272, 38.206732],
                    zoom: 15.5,
                    controls: ['typeSelector', 'fullscreenControl', 'routePanelControl']
                });

                let routeControl = YMap.controls.get('routePanelControl');
                
                routeControl.routePanel.state.set({
                    tyle: "masstransit",
                    fromEnabled: true,
                    from: "Электроугли, Центральная 114",
                    toEnabled: false,
                    to: "Электроугли, Центральная 59"
                });

                routeControl.routePanel.options.set({
                    allowSwitch: false,
                    reverseGeocoding: true,
                    types: { masstransit: true, pedestrian: true, taxi: true }
                });

                let switchRouteButton = new ymaps.control.Button({
                    data: {
                        content: "Поменять местами",
                        title: "Поменять адреса местами"
                    },
                    options: { 
                        selectOnClick: false, 
                        maxWidth: 160 
                    }
                });

                switchRouteButton.events.add("click", function() {
                    routeControl.routePanel.switchPoints();
                })

                let trafficControl = new ymaps.control.TrafficControl({
                    state: {
                        providerKey: 'traffic#actual',
                        trafficShown: false
                    }
                })

                YMap.controls.add(switchRouteButton);
                YMap.controls.add(trafficControl);
            });
        }
    }

    render() {
        return(
            <Container as="div" id="yandex-map__id" bsPrefix="yandex-map"></Container>
        );
    }
}

export default YandexMap;