import FlatfileImporter from "@flatfile/adapter";
import $ from "jquery";

const importer = new FlatfileImporter("4171f0b4-5f5c-4b32-a008-356ebb813e4e", {
  fields: [
    {
      label: "Unique ID",
      key: "unique_id",
      validators: [{ validate: "unique" }]
    },
    {
      label: "Created At",
      key: "created_at"
    },
    {
      label: "Score",
      key: "score"
    },
    {
      label: "Question",
      key: "question"
    },
    {
      label: "Original Comment",
      key: "original_comment"
    },
    {
      label: "Language",
      key: "language"
    }
  ],
  type: "Feedback",
  allowInvalidSubmit: false,
  managed: true,
  allowCustom: true,
  disableManualInput: false,
  devMode: true,
  styleOverrides: {
    primaryButtonColor: "#10c2ed"
  }
});
// test changes
importer.setCustomer({
  userId: "19234",
  name: "Foo Bar"
});

$("#launch").click(function () {
  importer
    .requestDataFromUser()
    .then(function (results) {
      importer.displaySuccess("Thanks for your data.");
      $("#raw_output").text(JSON.stringify(results.data, " ", 2));
    })
    .catch(function (error) {
      console.info(error || "window close");
    });
});
