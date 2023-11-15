// Copyright 2023 Google LLC
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

function main(catalog, query) {
  // [START retail_v2_generated_CompletionService_CompleteQuery_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Catalog for which the completion is performed.
   *  Full resource name of catalog, such as
   *  `projects/* /locations/global/catalogs/default_catalog`.
   */
  // const catalog = 'abc123'
  /**
   *  Required. The query used to generate suggestions.
   *  The maximum number of allowed characters is 255.
   */
  // const query = 'abc123'
  /**
   *  Required field. A unique identifier for tracking visitors. For example,
   *  this could be implemented with an HTTP cookie, which should be able to
   *  uniquely identify a visitor on a single device. This unique identifier
   *  should not change if the visitor logs in or out of the website.
   *  The field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  // const visitorId = 'abc123'
  /**
   *  Note that this field applies for `user-data` dataset only. For requests
   *  with `cloud-retail` dataset, setting this field has no effect.
   *  The language filters applied to the output suggestions. If set, it should
   *  contain the language of the query. If not set, suggestions are returned
   *  without considering language restrictions. This is the BCP-47 language
   *  code, such as "en-US" or "sr-Latn". For more information, see Tags for
   *  Identifying Languages (https://tools.ietf.org/html/bcp47). The maximum
   *  number of language codes is 3.
   */
  // const languageCodes = ['abc','def']
  /**
   *  The device type context for completion suggestions. We recommend that you
   *  leave this field empty.
   *  It can apply different suggestions on different device types, e.g.
   *  `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device
   *  types.
   *  Supported formats:
   *  * `UNKNOWN_DEVICE_TYPE`
   *  * `DESKTOP`
   *  * `MOBILE`
   *  * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.
   */
  // const deviceType = 'abc123'
  /**
   *  Determines which dataset to use for fetching completion. "user-data" will
   *  use the imported dataset through
   *  CompletionService.ImportCompletionData google.cloud.retail.v2.CompletionService.ImportCompletionData.
   *  "cloud-retail" will use the dataset generated by cloud retail based on user
   *  events. If leave empty, it will use the "user-data".
   *  Current supported values:
   *  * user-data
   *  * cloud-retail:
   *    This option requires enabling auto-learning function first. See
   *    guidelines (https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).
   */
  // const dataset = 'abc123'
  /**
   *  Completion max suggestions. If left unset or set to 0, then will fallback
   *  to the configured value
   *  CompletionConfig.max_suggestions google.cloud.retail.v2.CompletionConfig.max_suggestions.
   *  The maximum allowed max suggestions is 20. If it is set higher, it will be
   *  capped by 20.
   */
  // const maxSuggestions = 1234
  /**
   *  The entity for customers that may run multiple different entities, domains,
   *  sites or regions, for example, `Google US`, `Google Ads`, `Waymo`,
   *  `google.com`, `youtube.com`, etc.
   *  If this is set, it should be exactly matched with
   *  UserEvent.entity google.cloud.retail.v2.UserEvent.entity  to get
   *  per-entity autocomplete results.
   */
  // const entity = 'abc123'

  // Imports the Retail library
  const {CompletionServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new CompletionServiceClient();

  async function callCompleteQuery() {
    // Construct request
    const request = {
      catalog,
      query,
    };

    // Run request
    const response = await retailClient.completeQuery(request);
    console.log(response);
  }

  callCompleteQuery();
  // [END retail_v2_generated_CompletionService_CompleteQuery_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
