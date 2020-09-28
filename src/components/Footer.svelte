<script>
  import Nav from '../components/Nav.svelte';

  // SVGs
  import Facebook from './svg/Facebook.svelte';
  import Instagram from './svg/Instagram.svelte';
  import Twitter from './svg/Twitter.svelte';
  import Youtube from './svg/Youtube.svelte';
  import Phone from './svg/Phone.svelte';
  import Email from './svg/Email.svelte';

  export let footerData;
  let showHome = true;
  let footData = footerData[0];
</script>

<style lang="scss" global>
  footer {
    --footerTextColor: var(--darkBlue);
    --icon-color: var(--text);

    color: var(--footerTextColor);
    padding: 8px 0;
    background-color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10em;
    padding: 0 var(--containerPadding);

    & > div {
      padding: 1em 0;
    }

    a {
      color: var(--footerTextColor);
      text-decoration: none;
    }

    h5 {
      margin-top: 0;
      color: var(--footerTextColor);
      font-size: 1em;
    }

    address {
      font-style: normal;

      .country-name {
        display: none;
      }
    }

    .social-media {
      margin-top: 2em;

      a {
        svg {
          fill: var(--icon-color);
          height: 2em;
          width: auto;
          transform: scale(1);
          opacity: 0.85;
          transition: transform 300ms ease-in-out;

          &:hover {
            transform: scale(1.25);
            opacity: 1;
            transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
          }
        }

        & + a {
          margin-left: 20px;
        }

        // &.facebook {
        // 	svg {
        // 		fill: #1877F2;
        // 	}
        // }

        // &.instagram {
        // 	svg {
        // 		fill: #E4405F;
        // 	}
        // }

        // &.youtube {
        // 	svg {
        // 		fill: #FF0000;
        // 	}
        // }

        // &.twitter {
        // 	svg {
        // 		fill: #1DA1F2;
        // 	}
        // }
      }
    }

    .footer-center {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      a {
        & + a {
          margin-left: 1em;
        }
      }
    }

    .contact {
      display: flex;
      flex-flow: column nowrap;

      & > div {
        display: flex;
        align-items: center;

        & + div {
          margin-top: 1em;
        }

        a {
          margin-left: 0.5em;
        }

        svg {
          fill: var(--icon-color);
          height: 1.25em;
          width: auto;
        }
      }
    }

    @media (max-width: 640px) {
      display: block;

      & > div {
        text-align: center;
      }

      .contact {
        align-items: center;
      }
    }
  }

  .copy-right {
    padding: 8px 0;
    text-align: center;
    width: 100%;
    color: var(--gray);
  }
</style>

{#if footData}
  <footer>
    <div class="footer-left">
      <div class="contact-info">
        <address>
          <div class="vcard">
            <h5 class="org">{footData.municipality}</h5>
            <div class="adr">
              <div class="street-address">
                {footData.homeGroup.addressGroup.address}
              </div>
              <span class="locality">
                {footData.homeGroup.addressGroup.city}
              </span> , <span class="region">
                {footData.homeGroup.addressGroup.state}
              </span> , <span class="postal-code">
                {footData.homeGroup.addressGroup.zipcode}
              </span>
              <span class="country-name">United States of America</span>
            </div>
          </div>
        </address>
      </div>
    </div>

    <div class="footer-center">
      <Nav {showHome} />
      <div class="social-media">
        <nav>
          {#if footData.homeGroup.contactGroup.facebook}
            <a
              class="facebook"
              target="_blank"
              rel="external"
              href={footData.homeGroup.contactGroup.facebook}>
              <Facebook />
            </a>
          {/if}
          {#if footData.homeGroup.contactGroup.twitter}
            <a
              class="twitter"
              target="_blank"
              rel="external"
              href={footData.homeGroup.contactGroup.twitter}>
              <Twitter />
            </a>
          {/if}
          {#if footData.homeGroup.contactGroup.instagram}
            <a
              class="instagram"
              target="_blank"
              rel="external"
              href={footData.homeGroup.contactGroup.instagram}>
              <Instagram />
            </a>
          {/if}
          {#if footData.homeGroup.contactGroup.youtube}
            <a
              class="youtube"
              target="_blank"
              rel="external"
              href={footData.homeGroup.contactGroup.youtube}>
              <Youtube />
            </a>
          {/if}
        </nav>
      </div>
    </div>

    <div class="footer-right">
      <div class="contact">
        {#if footData.homeGroup.contactGroup.email}
          <div class="email">
            <Email />
            <a
              target="_blank"
              rel="external"
              href="mailto:{footData.homeGroup.contactGroup.email}">
              {footData.homeGroup.contactGroup.email}
            </a>
          </div>
        {/if}

        {#if footData.homeGroup.contactGroup.phone}
          <div class="phone">
            <Phone />
            <a
              target="_blank"
              rel="external"
              href="tel:{footData.homeGroup.contactGroup.phone}">
              {footData.homeGroup.contactGroup.phone}
            </a>
          </div>
        {/if}
        {#if footData.fax}
          <div class="fax">
            <Phone />
            <a target="_blank" rel="external" href="tel:{footData.fax}">
              {footData.fax}
            </a>
          </div>
        {/if}
      </div>
    </div>
  </footer>
{/if}

<div class="copy-right text_small">
  &copy; Copyright {new Date().getFullYear()}. All rights reserved.
</div>
