/* Official Documentation */
/* https://docs.cypress.io/api/commands/scrollintoview */

/* Cypress Custom Command - Scroll till end of page */
/* Python equivalent */
/* https://github.com/hjsblogger/web-scraping-with-python/blob/main/pageobject/helpers.py#L96 */
/* https://github.com/hjsblogger/web-scraping-with-python/blob/main/pageobject/helpers.py#L111 */

/* Also took help of AI to covert the Python code to Cypress custom command in JS */
Cypress.Commands.add('scrollUntilBottom', (url) => {
    cy.visit(url); // Visit the provided URL

    const scroll_window = () => {
      cy.window().then((win) => {
        const startHeight = win.document.body.scrollHeight;
        win.scrollTo(0, startHeight);

        /* Wait for the content to load */
        cy.wait(2000);

        /* Check the new scroll height */
        const newHeight = win.document.documentElement.scrollHeight;

        if (newHeight > startHeight)
        {
          /* If the new height is greater, repeat the process */
          scrollAndCheckHeight();
        }
        else
        {
          /* End of the page reached */
          cy.log('Reached the end of the page');
        }
      });
    };

    scroll_window();
});


describe('Test: Scroll Into View', () => {

  let urls;

  before(() => {
    cy.fixture('urls.json').then((data) => {
      urls = data;

      /* Set the viewport size to 1024 * 768 */
      cy.viewport(1024, 768);
    });
  });

  it('Window ScrollIntoView Demo - Lazy Loaded Images', () => 
    {
      const cameraImage = '#mz-product-listing-image-39217984-0-2 > div > div.carousel-item.active > img';
  
      cy.visit(urls.url1);
  
      /* Wait till the DOM contents are loaded */
      /* in this case, it is only the canvas element */
      cy.document().should((doc) => {
        expect(doc.readyState).to.equal('complete');
      });
  
      /* Scroll to the bottom */
      cy.scrollTo('bottom');
  
      cy.wait(1000);
  
      /* Scroll back to the top */
      cy.scrollTo('top');
  
      /* Additional cushioning for page loading */
      cy.wait(2000);
      
      /* Scroll into the view */
      /* Doc - https://docs.cypress.io/api/commands/scrollintoview#Use-linear-easing-animation-to-scroll */
      cy.get(cameraImage)
      .scrollIntoView({ easing: 'linear' })
      .invoke('css', {
        position: 'relative',              /* Ensure proper positioning */
        zIndex: '1000',                   /* Bring it to the front */
        backgroundColor: 'rgba(128, 128, 128, 0.5)', /* Light grey background */
        transition: 'background-color 2.5s ease'    /* Smooth transition */
      });
  
      /* Only for testing purpose */  
      cy.wait(2000);
  
      /* Check if the image is within the view */
      /* Doc - https://docs.cypress.io/api/commands/scrollintoview#Scrolling */
      cy.get(cameraImage, { timeout: 2000 }).should('be.visible');
  
      /* Click on the element and verify if the click was successful */
      cy.get(cameraImage).click();
  
      /* Verify if the respective product page is open */
      cy.url().should('include', 'product_id=29');
  
      cy.log('Window ScrollIntoView Demo Complete')
    });

it('Window ScrollIntoView Demo - Infinite Scroll', () => 
{
    const cameraImage = '[src="/static/img/92905-A.jpg"]';

    cy.visit(urls.url2);

    /* Wait till the DOM contents are loaded */
    /* in this case, it is only the canvas element */
    cy.document().should((doc) => {
      expect(doc.readyState).to.equal('complete');
    });

    /* Scroll till the end of page is reached */
    cy.scrollUntilBottom(urls.url2);
    
    /* Scroll into the view */
    /* Doc - https://docs.cypress.io/api/commands/scrollintoview#Use-linear-easing-animation-to-scroll */
    cy.document().then((doc) => {
      const element = doc.querySelector(cameraImage);
      expect(element, `Element with selector ${cameraImage} should exist`).to.exist;

      try
      {
        const element = doc.querySelector(cameraImage);
        expect(element, `Element with selector ${cameraImage} should exist`).to.exist;
      
        if (!element)
        {
          throw new Error(`Element not found: ${cameraImage}`);
        }
        else
        {
          /* Scroll into view */
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });

          /* Highlight the element */
          /* Took some help from AI :), why not :D */
          element.style.border = "2px solid red";
          element.style.backgroundColor = "rgba(255, 0, 0, 0.2)";

          /* Assert if not visible */
          expect(element.offsetParent).to.not.be.null;

          cy.wait(4000);

          element.click();

          cy.wait(4000);

          /* Verify if the respective product page is open */
          cy.url().should('include', '92905-A');
        }      
      }
      catch (error) 
      {
        cy.log('An error occurred:', error.message);
        console.error('Full error details:', error);
        throw error;
      }

      cy.log('Window ScrollIntoView Demo Complete')
  });
});
});