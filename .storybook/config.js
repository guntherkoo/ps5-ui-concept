import { configure } from "@storybook/react";

// Global Base Styles
require('styles/styles.scss');

// Global Storybook Decorator
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

function loadStories() {
	const req = require.context("../components", true, /\.stories\.tsx$/);

    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);