import DappLib from "@decentology/dappstarter-dapplib";
import DOM from "../components/dom";
import "../components/action-card.js";
import "../components/action-button.js";
import "../components/text-widget.js";
import "../components/number-widget.js";
import "../components/account-widget.js";
import "../components/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("harness-page")
export default class HarnessPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
    let page = localStorage.getItem('dappstarter-page');
    if (page.includes('-')) {
      setTimeout(() => {
        this.setPageLoader(page);
      }, 0);
    }
  }

  getPages() {
    return[
    {
        "name": "core-administrator_role",
        "title": "Administrator Role",
        "description": "Define accounts that can perform certain admin functions.",
        "category": "Access Control",
        "route": "/core-administrator_role"
    },
    {
        "name": "core-contract_access",
        "title": "Contract Access",
        "description": "Control which external contracts can interact with your contract.",
        "category": "Access Control",
        "route": "/core-contract_access"
    },
    {
        "name": "core-contract_runstate",
        "title": "Contract Run State",
        "description": "Ability to pause operation of your smart contract.",
        "category": "Access Control",
        "route": "/core-contract_runstate"
    },
    {
        "name": "core-ipfs",
        "title": "IPFS Documents",
        "description": "InterPlanetary File System (decentralized file storage)",
        "category": "File Storage",
        "route": "/core-ipfs"
    }
]; 
  }

  handleClick = e => {
    e.preventDefault();
    localStorage.setItem('dappstarter-page', e.target.dataset.link);
    this.setPageLoader(e.target.dataset.link);
  };

  setPageLoader(name) {
    let pageLoader = document.getElementById("page-loader");
    pageLoader.load(name, this.getPages());
    this.requestUpdate();
  }

  render() {
    let content = html`
      <div class="container m-auto">
        <div class="row fadeIn mt-3 p-2 block">
          <p class="mt-3">
            Welcome to the UI Harness! Each feature module you selected for your project 
            has a page that demonstrates all of the module's capabilities with a user interface. You can 
            try the various features, then copy code selectively to your Dapp page. To continue, 
            select a feature module.           
          </p>
        </div>
        <ul class="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${this.getPages().map(page =>
              html`<li class="col-span-1 bg-white rounded-lg shadow h-64">
                      <div class="flex flex-col items-center p-6 h-full">
                        <div class="font-bold text-xl mb-2">${page.title}</div>
                        <p class="text-gray-700 text-base mb-3">${page.description}</p>
                        <div class="flex flex-row flex-grow">
                            <button
                              @click=${this.handleClick}
                              data-link=${page.name}
                              class="self-end text-white font-bold py-2 px-8 rounded bg-green-500 hover:bg-green-700"}"
                            >
                              View
                            </button>
                          </div>
                      </div>
                    </li>`)
        }
        </ul>
      </div>
    `; 
    return content;

  }
}



