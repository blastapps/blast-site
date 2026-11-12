// Shared header and footer, used as <site-header></site-header> and <site-footer></site-footer>.
// Optional: <site-footer updated="Nov 9 2026"></site-footer> adds a "Last updated" line.

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="top-bar">
        <span id="logo">blast studio</span>
        <span class="email">hello&#64;blastapps&#46;dev</span>
      </div>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const updated = this.getAttribute('updated');
    this.innerHTML = `
      <div id="footer">
        <span class="email"><a href="mailto:hello@blastapps.dev">Email</a></span>
        •
        <span><a target="_blank" href="https://codeberg.org/blast">Codeberg</a></span>
        ${updated ? `<span class="lastUpdated">• Last updated: ${updated}</span>` : ''}
      </div>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
