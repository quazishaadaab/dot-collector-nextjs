import React from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import Script from "next/script"
import 'jquery'
import DataService from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
// jquery guidline: always do import $ from jquery and import jquery-ui-dist/jquery-ui
// always make the function in the top then call it in render. or else react children error will appear

function Search() {
  const { user } = useSelector((state) => state.user);

  const action = () => {
    $(document).ready(function () {
      $("#usersearch").autocomplete({
        source: async function (request, response) {
          let data = await fetch(
            `https://salty-tor-00815.herokuapp.com/search?term=${request.term}` || `http://localhost:5000/search?term=${request.term}`
          )
            .then((results) => results?.json())
            .then((results) =>
              results?.map((result) => {
                return {
                  label: result?.username,
                  value: result?.username,
                  id: result?.userid,
                };
              })
            );
          response(data);
        },
        minLength: 2,
        autoFocus: true,
        select: function (event, ui) {
          const peerdoc = {
            userid: user?.userid,
            peerid: ui?.item?.id,
          };
// need to add off(click).on(click) or else it will send multiple requests at the same time. we only want to send 
// singular requests.

          $("#addbutton").off('click').on("click",() => {
            DataService.addPeers(peerdoc);
            console.log(peerdoc)
          
          });
          $("#deletebutton").off("click").on("click", () => {
       
            console.log(peerdoc)
             DataService.deletePeerById(peerdoc);
          });
// only adds peer when button is clicked



        },
      });
    });
  };

  return (
    <div>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <link
          rel="stylesheet"
          href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css"
        />
        <link rel="stylesheet" href="/resources/demos/style.css" />
        <Script src="https://code.jquery.com/jquery-3.6.0.js"></Script>
        <Script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></Script>
        <div className="ui-widget">
          <label for="usersearch">User Search</label>
          <br />
          <input id="usersearch" />
        </div>
        <button type="submit" id="addbutton">Add Peer</button>
        <button type="submit" id="deletebutton">Delete Peer</button>

        {action()}
      </body>
    </div>
  );
}

export default Search;
