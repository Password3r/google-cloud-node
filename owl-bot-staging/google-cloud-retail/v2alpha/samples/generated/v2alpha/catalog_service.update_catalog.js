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

function main(catalog) {
  // [START retail_v2alpha_generated_CatalogService_UpdateCatalog_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Catalog google.cloud.retail.v2alpha.Catalog  to update.
   *  If the caller does not have permission to update the
   *  Catalog google.cloud.retail.v2alpha.Catalog, regardless of whether or
   *  not it exists, a PERMISSION_DENIED error is returned.
   *  If the Catalog google.cloud.retail.v2alpha.Catalog  to update does not
   *  exist, a NOT_FOUND error is returned.
   */
  // const catalog = {}
  /**
   *  Indicates which fields in the provided
   *  Catalog google.cloud.retail.v2alpha.Catalog  to update.
   *  If an unsupported or unknown field is provided, an INVALID_ARGUMENT error
   *  is returned.
   */
  // const updateMask = {}

  // Imports the Retail library
  const {CatalogServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new CatalogServiceClient();

  async function callUpdateCatalog() {
    // Construct request
    const request = {
      catalog,
    };

    // Run request
    const response = await retailClient.updateCatalog(request);
    console.log(response);
  }

  callUpdateCatalog();
  // [END retail_v2alpha_generated_CatalogService_UpdateCatalog_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
