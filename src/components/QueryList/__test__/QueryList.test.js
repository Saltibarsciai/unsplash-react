import React from 'react';
import renderer from 'react-test-renderer';
import QueryList from '../QueryList';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {startLoader} from "../../../store/actions";
import "@testing-library/jest-dom/extend-expect";
const mockStore = configureStore([]);
let component;

describe('QueryList component tests', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            queryReducer: [
                "Cars",
                "Moms",
                "Gym"
            ]
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <QueryList />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should toggle slider', () => {
        const button = component.root.findByType('button');
        const slider = component.root.findByType('div');
        renderer.act(() => {
            button.props.onClick();
        });
        expect(slider.props.Closed).toEqual(false);

        renderer.act(() => {
            button.props.onClick();
        });
        expect(slider.props.Closed).toEqual(true);
    });

    it('should dispatch progress bar', () => {
        let button = component.root.findAllByType('li')[0];
        renderer.act(() => {
            button.props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledWith(
            startLoader("upload-images"));
    });
});