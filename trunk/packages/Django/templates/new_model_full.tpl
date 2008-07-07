class {{modelname}}( models.Model ):

    #fields go here
    
    def __unicode__(self):
        return unicode(self.id)
        
    def save(self):
        super({{modelname}},self).save()
        