// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START speech_v1p1beta1_generated_Adaptation_ListPhraseSet_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of phrase set. Format:
   *  `projects/{project}/locations/{location}`
   *  Speech-to-Text supports three locations: `global`, `us` (US North America),
   *  and `eu` (Europe). If you are calling the `speech.googleapis.com`
   *  endpoint, use the `global` location. To specify a region, use a
   *  regional endpoint (https://cloud.google.com/speech-to-text/docs/endpoints)
   *  with matching `us` or `eu` location value.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of phrase sets to return. The service may return
   *  fewer than this value. If unspecified, at most 50 phrase sets will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListPhraseSet` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListPhraseSet` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Speech library
  const {AdaptationClient} = require('@google-cloud/speech').v1p1beta1;

  // Instantiates a client
  const speechClient = new AdaptationClient();

  async function callListPhraseSet() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = speechClient.listPhraseSetAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPhraseSet();
  // [END speech_v1p1beta1_generated_Adaptation_ListPhraseSet_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
