import { z } from 'zod';
import rawSite from '../data/site.json';
import rawItinerary from '../data/itinerary.json';
import rawTravel from '../data/travel.json';
import rawActivities from '../data/activities.json';
import rawResources from '../data/resources.json';

const text = z.string().trim().min(1);
const url = z.url().refine(value => value.startsWith('https://'), 'Links must use HTTPS');
const resourceUrl = z.union([url, z.literal('/guides/ski-rental-options.pdf'), z.literal('/guides/lesson-guide.pdf'), z.literal('#non-skiers')]);
const link = z.object({ label: text, url: resourceUrl }).strict();
const unique = (values: string[]) => new Set(values).size === values.length;
export const site = z.object({
  title:text, description:text, brand:text, location:text, dates:text, welcome:text,
  partifulUrl:url.nullable(), contact:z.object({label:text,url:z.string().regex(/^mailto:[^\s]+@[^\s]+$/)}).strict().nullable(),
  heroAlt:text, heroCaption:text,
  navigation:z.array(z.object({id:z.enum(['itinerary','travel','skiing','resources']),label:text}).strict()).length(4).refine(v=>unique(v.map(i=>i.id)), 'Duplicate section ID'),
  labels:z.object({skip:text,menu:text,closeMenu:text,partiful:text,partifulPending:text,footer:text,contact:text}).strict()
}).strict().parse(rawSite);
const activity = z.object({title:text,description:text,status:z.enum(['confirmed','unconfirmed']),time:z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/).optional(),location:text.optional(),link:link.optional()}).strict();
export const itinerary = z.object({heading:text,intro:text,expandLabel:text,collapseLabel:text,days:z.array(z.object({date:z.iso.date(),title:text,summary:text,activities:z.array(activity).min(1)}).strict()).length(5).refine(days=>days.every((day,i)=>day.date===`2027-02-${18+i}`),'Expected February 18–22 in order')}).strict().parse(rawItinerary);
export const travel = z.object({heading:text,intro:text,items:z.array(z.object({title:text,eyebrow:text,description:text,flights:z.array(z.object({label:text,date:text,from:text,to:text,departure:text,arrival:text}).strict()).optional(),link:link.nullable()}).strict()).min(1)}).strict().parse(rawTravel);
export const activities = z.object({heading:text,intro:text,nonSkiers:z.object({heading:text,intro:text,note:text,items:z.array(z.object({title:text,description:text,link:link.nullable()}).strict()).min(1)}).strict(),items:z.array(z.object({title:text,description:text,tag:text,link:link.nullable()}).strict()).min(1)}).strict().parse(rawActivities);
export const resources = z.object({heading:text,intro:text,items:z.array(z.object({title:text,description:text,url:resourceUrl.nullable(),pending:text.nullable()}).strict().refine(item=>!!item.url||!!item.pending,'A resource needs a URL or pending label')).min(1)}).strict().parse(rawResources);
