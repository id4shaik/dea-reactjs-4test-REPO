
Reference:

https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-cloudfront.html#scenario-cloudfront-s3origin
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-s3originconfig.html
https://youtu.be/CQ8vzm1kYkM
https://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html


Provide either a Terraform or a Cloudformation template that creates the following
infrastructure as code to host the SPA on AWS:

created RAppS3CF.yml for creating infra... PFA at root repo folder




Added this script in package.json 
![image](https://user-images.githubusercontent.com/81747695/131244922-acd515c7-b4f3-487d-aceb-44cd4540ef42.png)


deploying a basic Single Page Application (SPA) and its associated infrastructure to Amazon Web Services (AWS)
.AWS S3
S3 is a simple storage service designed to store data and is one of the most popular AWS offering with flexible pricing. It is very reliable, and delivers high performance at massive scale.
One of the most important aspects of  S3 is that you only pay for the storage used, not provisioned. For example, for 1 GB file stored on S3 with 1 TB of storage provisioned, you are billed for 1 GB only. In Amazon EC2, you pay for provisioned capacity.
S3 Security
AWS is responsible for protecting the infrastructure that runs AWS services in the cloud. So, as an AWS customer, you benefit from incredible security.

To make sure that S3 buckets and objects are secure, you are responsible to limit the permissions to S3 resources. Also, AWS suggests you follow the Security Best Practices for Amazon S3.
CloudFront
It is AWS Content Delivery Network (CDN) that securely delivers content such as HTML, js, css and image files to customers globally with low latency and high transfer speeds by pushing to edge locations.
Now, to answer our question, let's talk about benefits of using S3 & CloudFront.
Benefits of using S3 & CloudFront
Ease of use and Maintenance
These are the static files which do not require any server, We just need to upload all the files to S3. Also, it is very simple to manage frontend code on s3 which communicates with backend even if it is on a different server.
Less Cost
There is a significant reduction in cost since S3 is designed for static resource handling. In general, cost efficiency depends on how well we build the architecture of our application and maintain the files.
Understanding SPA and Setting up S3, Cloud Front

Growingly, many web applications nowadays are SPA. Primary focus of this blog is to understand how it's easy, simple and cheap to host a single-page website in a few minutes by storing files on S3, and serving them using CloudFront.
Before we dive into AWS, let's understand the principles of SPA
Single Page Application (SPA)
A Single Page Application is a web application that doesn't need to reload the page during its use and works within a browser that interacts with user without making a request to the server to fetch new HTML.
For all the SPAs, we need to make sure all requests to the server (S3 in this case) return something even if no file exists. This is because SPAs like Angular or react with their Routers needs the index.html page for every request, then things like "not found" pages are handled in the front-end.
Now, you have a brief idea about SPA we will go deep into hosting SPA in AWS S3 using Cloudfront.
Single Page Web App Hosting
The first thing to consider when starting a website is to choose a web hosting provider. The web hosting provider provides the web space where your website files are stored and needed for your website to be viewed on the internet.
Single page web hosting is best for
•	Websites built with frameworks like Angular, React, Vue, etc.
•	Progressive Web Apps (PWA)
•	Websites that do not contain server side scripting


![image](https://user-images.githubusercontent.com/81747695/131246836-df7ffa62-90bd-4761-b091-6fc505c6f079.png)


![image](https://user-images.githubusercontent.com/81747695/131246848-475c20d7-acd6-4205-8ca2-9c5037170863.png)

