import React from 'react';
import Splash from '../shared/Splash';
import Info from '../shared/Info';
import ContactForm from '../shared/ContactForm';
import './index.css';
let SellScreen = ({scrollY}) => (
  <div class="sell">
    <Splash 
      scrollY={scrollY} 
      background="banner4.jpg"
    />
    <div class="sell-top">
      <Info
        bigtitle={true}
        title="Sell Your House"
        text={["We buy properties in any condition or situation. We are not real estate agents, so we don’t want to list your house. We want to buy it.  We can advise you on the best approach to sell your home quickly within your unique situation. We buy houses in any condition, regardless why they are for sale.",
        "We are active property buyers. If your property meets our needs, we would like to buy it soon. We are not afraid of properties that require repairs. Regardless of the condition of your house or your current situation, we would like to learn more about your property.",
        "We are also well networked with other active buyers. This means we can help with properties that don’t match our current needs. There is no risk and no obligation on your part so please tell us about your property."]}
      />
      <ContactForm />
    </div>
    <div class="sell-bottom">
    <Info
      title="Behind On Payments?"
      text={["Act now while there’s still time!",
      "Sometimes life throws you a curve ball and the best of plans come unraveled. A payment that was completely manageable when you got your mortgage can seem impossible after a job change, injury, divorce or many other life altering events.", "If you’ve fallen behind on your payments it is important that you act immediately. Let us help solve your problem while we still can."]}
    />
    <Info
      title="Sell Your House"
      text={["Rising interest rates mean ever-increasing mortgage payments!",
      "Millions of homeowners have adjustable rate or interest only mortgages. Rising interest rates may have caused your monthly mortgage payment to skyrocket. In fact, many homeowners wouldn’t even qualify for the loan payment they are now expected to make. You are not alone, and it is not your fault. The economy is not very predictable, and rising interest rates have caught many people off guard.",
      "If you can’t keep pace with your ever-increasing monthly payment then contact us immediately. We can act quickly and may be able to solve your problem before your next payment is due."]}
    />
    <Info
      title="No Equity Or Over Financed?"
      text={["Get out of your house without paying real estate commissions!",
      "Getting out of a home when you have little or no equity can be tough. In fact, just selling for what you owe may take several months, and if you list with a real estate agent the commission may have to come out of your pocket.",
      "Contact us before listing with a real estate agent where you are locked in to paying a commission. We may be able to buy your property directly, saving you time and avoiding commission expenses."]}
    />
    <Info
      title="Two House Payments?"
      text={["Don’t let the stress of selling your old house keep you from enjoying your new one!",
      "Timing in real estate can be tricky. Maybe your old house didn’t sell as quickly as expected or your buyer fell through. Are you now stuck making payments on two houses? Instead of enjoying your new home you may feel stressed as you worry about how much more money you will throw away waiting to sell your old house.",
      "Wouldn’t it be great if we could buy your old house so you can start enjoying your new home?"]}
    />
    <Info
      title="Relocating Or New Job?"
      text={["You have a lot going on, let us take one of your worries away!",
      "Moving for a new job or a job transfer is often very exciting. However, it is also busy and stressful. Your deadline to leave town may be out of your control, and as it approaches (or passes) the pressure to sell your house will increase.",
      "Give us a chance to relieve you of this burden during this busy time in your life."]}
    />
    <Info
      title="Expired Listing?"
      text={["Don’t even consider re-listing before you contact us!",
      "Are you frustrated because your house listed with a Realtor hasn’t sold? Do you know why it didn’t sell? Was it the price, the marketing, not enough open houses, poor offers, or one of many other variables?",
      "Before re-listing with another Realtor, please contact us. We are active buyers and can act quickly. Let us help you get out of your house so you can stop making those mortgage payments."]}
    />
    <Info
      title="Suddenly Downsized?"
      text={["Losing a job changes everything!",
      "In today’s world of mergers and outsourcing, a job that was once safe and secure could disappear without notice. To make matters worse, many companies have hiring freezes meaning it may be difficult for you to find an equivalent replacement job.",
      "If you’ve been the victim of corporate downsizing, it may be time to re-evaluate all of your financial commitments."]}
    />
    <Info
      title="Foreclosure Or Bankruptcy?"
      text={["Time is of the essence. Act fast to save your credit!",
      "If your house payments are more than a month behind, your lender has probably already started foreclosure proceedings. As time passes, thousands of dollars in penalties and legal fees can be added to the balance you owe. And every single day extra interest is added!",
      "The best advice we can offer is for you to contact us immediately. Time truly is your enemy, and the longer you wait the harder it is for us to help.",
      "You don’t have to face this alone. We can help. Using our expertise we aim to save your credit and help you avoid filing bankruptcy. We are caring and understanding people, and we know how tough a time this is for you. Imagine the relief you will feel once we begin working together to put this behind you. Call us today for a confidential, no obligation evaluation of your situation before it is too late!"]}
    />
    <Info
      title="Foreclosure Or Bankruptcy?"
      text={["We can help you get on with your life!",
      "Divorce is difficult even in the best of situations. Adding the burden of selling a jointly owned home to the stress and emotions you are feeling may be overwhelming. As real estate investors who buy houses fast we can help. Let us give you an option that can help you get on with your life.",
      "We will be sensitive to your situation and work with you quickly to find a solution."]}
    />
    <Info
      title="Liens Or Judgments?"
      text={["Don’t be discouraged!",
      "Don’t let liens, judgments, or other title problems discourage you. We know how to handle these situations thereby allowing you to sell your property."]}
    />
    <Info
      title="Inherited Or Estate Property?"
      text={["Real estate is often the least liquid asset in an estate!",
      "Losing a loved one is a tragic experience. When real estate is involved in the estate, it often must be sold during the probate process. If you are responsible for settling the estate, you will have your hands full simply with the legal requirements, paperwork, and deadlines.",
      "By offering a possible quick sale of the property, we can help ease the task ahead of you."]}
    />
    <Info
      title="Nightmare Tenants?"
      text={["Immediate relief available for Tired Landlords!",
      "Are you tired of tenants, toilets and trash? Being a landlord is often a tiresome and thankless “job”. It isn’t easy, and certainly isn’t fun. Dealing with tenants that don’t pay or damage your property is enough to make you pull out your hair. On top of the headaches is the expense and maintenance.",
      "If you’ve had enough and would like to “move on”, we can help you put this burden behind you. Tell us about your property and situation. We can help."]}
    />
    <Info
      title="Vacant House?"
      text={["Contact us to stop the bleeding!",
      "Are you throwing money away making payments on a vacant house? It doesn’t take long for those payments to add up and really hurt your bottom line. In addition to this financial burden, it can be exhausting trying to keep an empty house secure and maintained. Let us help.",
      "Also, if there’s a vacant house in your neighborhood bringing down property values please let us know."]}
    />
    <Info
      title="Damaged Or Needing Repairs?"
      text={["Unlike a typical buyer, we can look beyond the repairs!",
      "Most buyers are either afraid of properties in need of repair or they simply can’t envision the end result. However, getting your property into selling condition may take more time or money than you have available. Before investing in costly repairs, please contact us. We are experienced in buying properties that need work. Let us save you the time, money, and risk involved."]}
    />
    <Info
      title="I Just Want Top Dollar"
      text={["We buy many properties that have zero debt on them or little debt/large equity. We buy all different types of homes. If you are simply looking to avoid realtor fees and sometimes even your State closing costs, we can buy your home seamlessly with little or no expense to you."]}
    />
    </div>
  </div>
);
export default SellScreen;