/**
 * Created by vaibhav on 31/3/18
 */
import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import ContentPagePreview from './preview-templates/ContentPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', ContentPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
