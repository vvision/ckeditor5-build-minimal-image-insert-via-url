# ckeditor5-build-minimal-image-insert-via-url

A minimal build to show how to integrate image insertion via url only in a custom ckeditor5 build.

## Configuration

Add image dependency in your ``npm install @ckeditor/ckeditor5-image``.
Be sure to match version with the version used by others components.

Import dependencies in the ckeditor5 build file ``src/ckeditor.js``:
```typescript
// For image insert via url
import ImageInsertViaUrl from '@ckeditor/ckeditor5-image/src/imageinsertviaurl';
```

Do not forget to also add the ``Image`` plugin on which ``ImageInsertViaUrl`` depends:
```typescript
import Image from '@ckeditor/ckeditor5-image/src/image';
```

Last, in the editor configuration, in this example, in the ``DecoupledEditor.defaultConfig`` object, add a specific configuration for ``image``, so that it only uses the ``insertImageViaUrl`` mecanism:
```typescript
image: {
    // Add this for image insert via url
    insert: {
        integrations: [
            'insertImageViaUrl',
        ]
    },
},
```

Then, add the button in the toolbar, in the array ``items`` of ``toolbar``, from ``DecoupledEditor.defaultConfig``. Example with a minimalist toolbar:
```typescript
toolbar: {
    items: [
        'heading',
        '|',
        'insertImage', // Insert image button
    ]
},
```

## Try it locally

* First step is build the editor if its configuration has been modified with ``npm run build``.
* Then run ``npm run serve`` to expose the sample html demo page locally.
* Open ``http://localhost:3333/sample/`` in the browser.

## Notes

This example is based on ckeditor5 ``DecoupledEditorBase``, but should work with other bases ``ClassicEditorBase`` or ``InlineEditorBase``.

## References

* [ckeditor5 - Issue 11654 - Allow using images from external source without allowing image upload](https://github.com/ckeditor/ckeditor5/issues/11654)
* [ckeditor5 - Pull Request 11980 - Introducing the ImageInsertViaUrl plugin enabling insertion of images via URL without the requirement of the UploadPlugin](https://github.com/ckeditor/ckeditor5/pull/11980)
* [ckeditor5 - ckeditor5-image/src/imageinsert.js](https://github.com/ckeditor/ckeditor5/blob/master/packages/ckeditor5-image/src/imageinsert.js)
* [ckeditor5 - Issue 5161 - Allow inserting images via URL](https://github.com/ckeditor/ckeditor5/issues/5161)