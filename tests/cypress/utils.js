export const getTestURL = (URL) => `${URL}?test_backend=true`;
export const getRandomEmail = () =>
  `cypress-test-${Math.random().toString(36).substr(2, 10)}@canonical.com`;

  export const standardFormUrls = [
    "/openstack/contact-us",
    "/appliance/contact-us",
    "/ai/contact-us",
    "/containers/contact-us",
    "/download/contact-us",
    "/financial-services/contact-us",
    "/gov/contact-us",
    "/kubernetes/contact-us",
    "/managed/contact-us",
    "/security/contact-us",
    "/server/contact-us",
    "/support/contact-us",
    "/training/contact-us",
    "/wsl/contact-us",
    "/aws/contact-us",
    "/azure/contact-us",
    "/ceph/contact-us",
    "/core/contact-us",
    "/core/smartstart/contact-us",
    "/dell/contact-us",
    "/desktop/contact-us",
    "/gcp/contact-us",
    "/ibm/contact-us",
    "/internet-of-things/contact-us",
    "/masters-conference/contact-us",
    "/observability/contact-us",
    "/telco/osm/contact-us",
  ];

  export const interactiveFormUrls = [
    {url: "/", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{emailLabel : /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/16-04/azure", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {submitBtn: /Let's discuss/ }]},
    {url: "/advantage", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {submitBtn: /Let's discuss/ }]},
    {url: "/ai/services", noOfPages: 3, inputs: [{label: /Have we missed something?/}, {firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{emailLabel : /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/appliance/hardware", noOfPages: 4, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{emailLabel : /Work email/, emailType :"test@gmail.com"}, {submitBtn: /Let's discuss/ }]},
    {url: "/automotive", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{companyLabel: /Company/: companyType: "test"}, {emailLabel : /Email address/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/aws", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{emailLabel : /Work email/, emailType :"test@gmail.com"},{phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/azure", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"},{emailLabel : /Work email/, emailType :"test@gmail.com"},{phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/ceph", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"},{phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/containers", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/core", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/core/smartstart", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/dell", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"},{submitBtn: /Let's discuss/ }]},
    {url: "/desktop/organisations", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/internet-of-things/digital-signage", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/download/iot", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/cube", noOfPages: 1, "This one is completely different"}, 
    {url: "/financial-services", noOfPages: 3,inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {submitBtn: /Let's discuss/ }]},
    {url: "/gcp", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/gov", noOfPages: 3}, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Work phone:/, phoneType:"07777777777"}, {submitBtn: /Let's talk/ }],
    {url: "/ibm", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/internet-of-things/appstore", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/internet-of-things/digital-signage", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/internet-of-things/gateways", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/internet-of-things/networking", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyLabel: /Company:/, companyType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/kubernetes", noOfPages: 1, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/kubernetes/managed", noOfPages: 1, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/managed", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/managed/apps", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/observability", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/openstack", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/openstack/managed", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/openstack/pricing-calculator", noOfPages: 1, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyNameLabel: /Company name/, companyNameType: "test"}, {jobTitleLabel: /Job title/, jobTitleType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/pricing/consulting", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/pricing/devices", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyNameLabel: /Company/, companyNameType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/pricing/infra", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/robotics", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyNameLabel: /Company/, companyNameType: "test"}, {jobTitleLabel: /Job title/, jobTitleType: "test"}, {emailLabel: /Email address:/, emailType :"test@gmail.com"}, {phoneLabel: /Phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/security", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/security/docker-images", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/security/esm", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/server", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/telco", noOfPages: 2, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/telco/osm", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {emailLabel: /Email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
    {url: "/wsl", noOfPages: 3, inputs: [{firstNameLabel: /First name/, firstNameType: "test"}, {lastNameLabel: /Last name/, lastNameType: "test"}, {companyNameLabel: /Company name/, companyNameType: "test"}, {emailLabel: /Work email/, emailType :"test@gmail.com"}, {phoneLabel: /Mobile\/cell phone number:/, phoneType:"07777777777"}, {submitBtn: /Let's discuss/ }]},
];
