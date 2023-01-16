/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Image from '@ckeditor/ckeditor5-image/src/image';
// For image insert via url
import ImageInsertViaUrl from '@ckeditor/ckeditor5-image/src/imageinsertviaurl';

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Heading,
	Image,
    ImageInsertViaUrl, // For image insert via url
	Link,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'insertImage', // Insert image button
		]
	},
	image: {
		// Add this for image insert via url
        insert: {
            integrations: [
                'insertImageViaUrl',
            ]
        },
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
